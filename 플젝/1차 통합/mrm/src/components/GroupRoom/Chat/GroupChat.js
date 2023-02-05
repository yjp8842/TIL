import React, { useState, useEffect } from "react";
import axios from "axios";
import SockJS from "sockjs-client";
import Stomp from "@stomp/stompjs";

const ChatRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [room, setRoom] = useState({});
  const [userId, setUserId] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [time, setTime] = useState("");
  const [sock, setSock] = useState();
  const [ws, setWs] = useState();
  const [reconnect, setReconnect] = useState(0);

  useEffect(() => {
    setRoomId(localStorage.getItem("wschat.roomId"));
    setUserId(localStorage.getItem("wschat.userId"));
    setUserNickname(localStorage.getItem("wschat.userNickname"));
    initRoom();
  }, []);

  const initRoom = () => {
    axios.get(`/chat/room/${roomId}`).then(response => {
      setRoom(response.data.room);
      let list = [];
      response.data.chats.forEach(chat =>
        list.push({
          // type: "TALK",
          roomId: chat.roomId,
          userId: chat.userId,
          userNickname: chat.userNickname,
          message: chat.message,
          time: chat.time,
        })
      );
      setMessages(list);
    });
  };

  const sendMessage = () => {
    ws.send(
      "/app/chat/message",
      {},
      JSON.stringify({
        // type: "TALK",
        roomId: roomId,
        userId: userId,
        userNickname: userNickname,
        message: message,
        time: time,
      })
    );
    setMessage("");
  };

  const recvMessage = (recv) => {
    setMessages(prevMessages => [
      ...prevMessages,
      {
        // type: recv.type,
        roomId: recv.roomId,
        userId: recv.userId,
        userNickname: recv.userNickname,
        message: recv.message,
        time: recv.time
      }
    ]);
  };

  const connect = () => {
    setSock(new SockJS(`/ws/chat`));
    setWs(Stomp.over(sock));
    ws.connect(
      {},
      function(frame) {
        ws.subscribe(`/topic/chat/room/${props.roomId}`, (message) => {
          const recv = JSON.parse(message.body);
          props.recvMessage(recv);
        })
      },
      function(error) {
        if (reconnect <= 5) {
          setTimeout(() => {
            console.log('connection reconnect');
            sock = new SockJS("/ws/chat");
            ws = Stomp.over(sock);
            setReconnect(reconnect + 1);
          }, 10 * 1000);
        }
      }
    );
  };

  connect();

  const back = () => {
    location.href = "/chat/room";
  };

  return (
    <div id="app">
      <div>
        <button onClick={back}>뒤로 가기</button>
      </div>
      <div>
        <h2>Room: {room.name}</h2>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text">내용</label>
        </div>

        <input onKeyPress={sendMessage} type='text' className='form-control' />
        
        {/* 전송 버튼 */}
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={sendMessage}>보내기</button>
        </div>
      </div>

      <div>
        <ul className="list-group">
          {messages.map(message => (
            <li key={message.message} className="list-group-item">
              {message.sender} - {message.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ChatRoom;