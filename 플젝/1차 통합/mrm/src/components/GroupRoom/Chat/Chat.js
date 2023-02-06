import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import SockJS from "sockjs-client";
// import { Stomp } from "@stomp/stompjs";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

const ROOM_SEQ = 1;

const Chat = () => {
  const client = useRef({});
  let [roomId, setRoomId] = useState();
  let [room, setRoom] = useState({});
  let [userId, setUserId] = useState("");
  let [userNickname, setUserNickname] = useState("");
  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  let [time, setTime] = useState("");
  // let [sock, setSock] = useState();
  // let [ws, setWs] = useState();
  // let [reconnect, setReconnect] = useState(0);

  const BASE_URL = 'https://i8a406.p.ssafy.io/api';
  
  // var sock = new SockJS(BASE_URL+"/ws/chat");
  // var ws = Stomp.over(function(){
  //   return new SockJS(BASE_URL+"/ws/chat");
  // });

  useEffect(() => {
    connect();
    initRoom();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      // brokerURL: "ws://localhost:8080/ws-stomp/websocket", // 웹소켓 서버로 직접 접속
      webSocketFactory: () => new SockJS(BASE_URL+"/ws/chat"), // proxy를 통한 접속
      connectHeaders: {
        "auth-token": "spring-chat-auth-token",
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(BASE_URL+`/topic/chat/room/${ROOM_SEQ}`, (message) => {
      var recv = JSON.parse(message.body);
      recvMessage(recv);
      // setMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
    });
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: BASE_URL+"/app/chat/message",
      body: JSON.stringify({
        // type: "TALK",
        roomId: parseInt(roomId),
        userId: userId,
        userNickname: userNickname,
        message: message,
        time: "오늘",
      }),
    });

    setMessage("");
  };

  // useEffect(() => {
  //   setRoomId(parseInt(localStorage.getItem("wschat.roomId")));
  //   setUserId(localStorage.getItem("wschat.userId"));
  //   setUserNickname(localStorage.getItem("wschat.userNickname"));

  //   console.log(parseInt(localStorage.getItem("wschat.roomId")).type);
  //   // connect();
  //   // initRoom();
  // }, []);

  const initRoom = () => {
    axios.get(BASE_URL+`/chat/room/${roomId}`).then(response => {
      setRoom(response.data.room);
      let list = [];
      response.data.chats.forEach((chat) =>
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

  // const sendMessage = (message) => {
  //   console.log("send 1");
  //   console.log(roomId);
  //   let url = BASE_URL+"/app/chat/message";
  //   console.log(url);
  //   ws.send(
  //     url,
  //     {},
  //     JSON.stringify({
  //       // type: "TALK",
  //       roomId: parseInt(roomId),
  //       userId: userId,
  //       userNickname: userNickname,
  //       message: message,
  //       time: "오늘",
  //     })
  //   );
  //   console.log("send 2");
  //   setMessage("");
  // };

  const recvMessage = (recv) => {
    // setMessages(prevMessages => [
    //   ...prevMessages,
    messages.push(
      {
        // type: recv.type,
        roomId: recv.roomId,
        userId: recv.userId,
        userNickname: recv.userNickname,
        message: recv.message,
        time: recv.time
      }
    )
  };

  const back = () => {
    window.location.href = BASE_URL+"/chat/room";
  };

  // const connect = () => {
  //   ws.connect(
  //     {},
  //     function(frame) {
  //       ws.subscribe(BASE_URL+`/topic/chat/room/${roomId}`, (message) => {
  //         var recv = JSON.parse(message.body);
  //         recvMessage(recv);
  //       })
  //     },
  //     function(error) {
  //       if (reconnect++ <= 5) {
  //         setTimeout(() => {
  //           console.log('connection reconnect');
  //           sock = new SockJS(BASE_URL+"/ws/chat");
  //           ws = Stomp.over(sock);
  //           // setReconnect(reconnect + 1);
  //           connect();
  //         }, 10 * 1000);
  //       }
  //     }
  //   );
  // };
  

  return (
    <div>
      <button onClick={() => {
        // connect(); 
        initRoom();}}
      >chat</button>
      <div>
        <button onClick={back}>뒤로 가기</button>
      </div>
      <div>
        <h2>Room: {roomId}</h2>
      </div>

      <div>
        <div>
          <label>내용</label>
        </div>

        <input
          type={"text"}
          placeholder={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.which === 13 && publish(message)} 
        />
        
        {/* 전송 버튼 */}
        <div>
          <button type="button" onClick={() => publish(message)}>보내기</button>
        </div>
      </div>

      <div>
        <ul>
          {messages.map(message => (
            <li key={message.message}>
              {message.userNickname} : {message.message} --- {message.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Chat;