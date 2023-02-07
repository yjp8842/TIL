import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import axios from "axios";
import "./Chat.css";

const ROOM_SEQ = 2;

const ChatTest = () => {
  const client = useRef({});
  const [roomId, setRoomId] = useState("");
  const [userId, setUserId] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [message, setMessage] = useState("");
  let [chatMessages, setChatMessages] = useState([]);

  // roomId는 룸버튼을 눌렀을 때 roomId 정보를 store에 저장하는 방식으로 해야 하나..?
  // store에서 가져올 것 : userId, userNickname

  useEffect(() => {
    connect();
    initRoom();

    // setRoomId();
    // setUserId();
    // setUserNickname();
    return () => disconnect();
  }, []);

  const initRoom = () => {
    // ROOM_SEQ -> roomId로 바꾸기
    axios.get('https://i8a406.p.ssafy.io/api/chat/room/'+ROOM_SEQ).then(response => {
      var list = [];
      response.data.chats.forEach(chat => {
        list.push({
          roomId: chat.roomId,
          userId: chat.userId,
          userNickname: chat.userNickname,
          message: chat.message,
          time: chat.time
        })
      });
      setChatMessages(list);
    })
  }

  const connect = () => {
    client.current = new StompJs.Client({
      // brokerURL: "ws://localhost:8080/ws/websocket", // 웹소켓 서버로 직접 접속
      webSocketFactory: () => new SockJS("https://i8a406.p.ssafy.io/api/ws"), // proxy를 통한 접속
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log('success');
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

  // 메시지 받기 -> time 필요함
  const subscribe = () => {
    // ROOM_SEQ -> roomId로 바꾸기
    client.current.subscribe('/sub/chat/room/'+ROOM_SEQ, (message) => {
      setChatMessages((chatMessages) => [
        ...chatMessages, JSON.parse(message.body)
      ]);
    });
  };

  // 메시지 보내기 + time 보낼 필요없음
  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        // ROOM_SEQ -> roomId로 바꾸기
        roomId: ROOM_SEQ,
        userId: userId,
        userNickname: userNickname,
        message: message
      }),
    });

    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      publish(message);
    }
  };

  // 연-월-일
  // 시간-분
  // 나눠서 주면 연-월-일 한번 띄우고 시간-분 채팅마다 기록되게 출력

  return (
    <div className="chatbox">
      {chatMessages && chatMessages.length > 0 && (
        <div className="chatinbox">
          {chatMessages.map((chatMessage, index) => {
            if (chatMessage.message.length > 0) {
              if (chatMessage.userId === userId) {
                return (
                  <div className="userchat">
                    <p className="time">{chatMessage.time}</p>
                    <div className="userchat-inbox">
                      <p>{chatMessage.userNickname}</p>
                      <p className="usermsg" key={index}>{chatMessage.message}</p>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="receivechat">
                    <div className="receivechat-inbox">
                      <p>{chatMessage.userNickname}</p>
                      <p className="receivemsg" key={index}>{chatMessage.message}</p>
                    </div>
                    <p className="time">{chatMessage.time}</p>
                  </div>
                )
              }
            } else {
              return;
            }
          })}
        </div>
      )}

      <div className="inputbox">
        {/* 된다면 엔터쳤을때 publish 되게끔 */}
        <input
          className="chatinput"
          type={"text"}
          placeholder={"메시지를 입력하세요"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <button className="chatbtn" onClick={() => publish(message)}>보내기</button>
      </div>
    </div>
  );
};

export default ChatTest;