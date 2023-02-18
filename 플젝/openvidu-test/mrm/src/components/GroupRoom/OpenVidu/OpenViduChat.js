// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from 'react-redux'
// import * as StompJs from "@stomp/stompjs";
// import * as SockJS from "sockjs-client";
// import axios from "axios";
// import "./OpenViduChat.css";

// // 데이터 타입
// // private int roomId;
// // private String userId;
// // private String userNickname;
// // private String message;
// // private LocalDateTime localDateTime;
// // private String date;  2023년 02월 02일 (Thu)
// // private String time;  PM 22시 13분

// const OpenViduChat = () => {
//   const client = useRef({});
//   const [roomId, setRoomId] = useState("");
//   const [userId, setUserId] = useState("");
//   const [userNickname, setUserNickname] = useState("");
//   const [message, setMessage] = useState("");
//   let [chatMessages, setChatMessages] = useState([]);

//   const {group, user} = useSelector((state) => ({
//     group: state.groupInfoReducers.group,
//     user: state.userInfoReducers.user,
//   }))

//   useEffect(() => {
//     connect();
//     initRoom();

//     setRoomId(group.id);
//     setUserId(user.id);
//     setUserNickname(user.nickname);

//     return () => disconnect();
//   }, []);

//   const initRoom = () => {
//     // ROOM_SEQ -> roomId로 바꾸기
//     axios.get('https://i8a406.p.ssafy.io/api/chat/room/'+roomId).then(response => {
//       var list = [];
//       response.data.chats.forEach(chat => {
//         list.push({
//           roomId: chat.roomId,
//           userId: chat.userId,
//           userNickname: chat.userNickname,
//           message: chat.message,
//           date: chat.date,
//           time: chat.time
//         })
//       });
//       setChatMessages(list);
//     })
//   }

//   const connect = () => {
//     client.current = new StompJs.Client({
//       // brokerURL: "ws://localhost:8080/ws/websocket", // 웹소켓 서버로 직접 접속
//       webSocketFactory: () => new SockJS("https://i8a406.p.ssafy.io/api/ws"), // proxy를 통한 접속
//       debug: function (str) {
//         console.log(str);
//       },
//       reconnectDelay: 5000,
//       heartbeatIncoming: 4000,
//       heartbeatOutgoing: 4000,
//       onConnect: () => {
//         console.log('success');
//         subscribe();
//       },
//       onStompError: (frame) => {
//         console.error(frame);
//       },
//     });

//     client.current.activate();
//   };

//   const disconnect = () => {
//     client.current.deactivate();
//   };

//   // chatMessages에 변화가 생겼을 때 스크롤 내려가도록.
//   useEffect(() => {
//     var chatInBox = document.getElementById('chatinbox');
//     chatInBox.scrollTop = chatInBox.scrollHeight;
//   }, [chatMessages])

//   // 메시지 받기 -> time 필요함
//   const subscribe = () => {
//     console.log("sub1")
//     // ROOM_SEQ -> roomId로 바꾸기
//     client.current.subscribe('/sub/chat/room/'+roomId, (message) => {
//       setChatMessages((chatMessages) => [
//         ...chatMessages, JSON.parse(message.body)
//       ]);
//     });
//     console.log("sub2")

//     // 메시지 받았을 때 스크롤 내려가도록.
//     var chatInBox = document.getElementById('chatinbox');
//     chatInBox.scrollTop = chatInBox.scrollHeight;
//   };

//   // 메시지 보내기 + time 보낼 필요없음
//   const publish = (message) => {
//     if (!client.current.connected) {
//       return;
//     }

//     client.current.publish({
//       destination: "/pub/chat/message",
//       body: JSON.stringify({
//         // ROOM_SEQ -> roomId로 바꾸기
//         roomId: roomId,
//         userId: userId,
//         userNickname: userNickname,
//         message: message
//       }),
//     });

//     setMessage("");
//     console.log("pub")
//   };

//   const onKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       publish(message);
//     }
//   };

//   // 만약 시간-분이 같다면 마지막 채팅에만 시간 출력 & 첫번째 채팅에만 userId 출력 (가능하다면)

//   return (
//     <div className="openvidu-chatbox">
//       {/* {chatMessages && chatMessages.length > 0 && ( */}
//       <div className="chatinbox" id="chatinbox">
//         {/* <div>{chatMessages[0].date}</div> */}

//         {chatMessages.map((chatMessage, index) => {
//           let displayDate = false;
//           const isCreated = chatMessage.date;
  
//           if (index > 0) {
//             const nextCreated = chatMessages[index - 1].date;
  
//             if (isCreated !== nextCreated) {
//               displayDate = true;
//             } else {
//               displayDate = false;
//             }
//           } else {
//             displayDate = true;
//           }

//           if (chatMessage.message.length > 0) {
//             if (chatMessage.userId === userId) {
//               if (displayDate) {
//                 return (
//                   <div>
//                     <div className="datebox">
//                       <p>{isCreated}</p>
//                     </div>
//                     <div className="userchat">
//                       <p className="time">{chatMessage.time}</p>
//                       <div className="userchat-inbox">
//                         <p>{chatMessage.userNickname}</p>
//                         <p className="usermsg" key={index}>{chatMessage.message}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               } else {
//                 return (
//                   <div className="userchat">
//                     <p className="time">{chatMessage.time}</p>
//                     <div className="userchat-inbox">
//                       <p>{chatMessage.userNickname}</p>
//                       <p className="usermsg" key={index}>{chatMessage.message}</p>
//                     </div>
//                   </div>
//                 )
//               }
//             } else {
//               if (displayDate) {
//                 return (
//                   <div>
//                     <div className="datebox">
//                       <p>{isCreated}</p>
//                     </div>
//                     <div className="receivechat">
//                       <div className="receivechat-inbox">
//                         <p>{chatMessage.userNickname}</p>
//                         <p className="receivemsg" key={index}>{chatMessage.message}</p>
//                       </div>
//                       <p className="time">{chatMessage.time}</p>
//                     </div>
//                   </div>
//                 )
//               } else {
//                 return (
//                   <div className="receivechat">
//                     <div className="receivechat-inbox">
//                       <p>{chatMessage.userNickname}</p>
//                       <p className="receivemsg" key={index}>{chatMessage.message}</p>
//                     </div>
//                     <p className="time">{chatMessage.time}</p>
//                   </div>
//                 )
//               }
//             }
//           } else {
//             return;
//           }
//         })}
//       </div>
//       {/* )} */}

//       {/* {chatMessages && chatMessages.map((chatMessage, index) => {
//         let displayDate = false;
//         const isCreated = chatMessage.date;

//         if (index !== chatMessages.length - 1) {
//           const nextCreated = chatMessages[index + 1].date;

//           if (isCreated !== nextCreated) {
//             displayDate = true;
//           } else {
//             displayDate = false;
//           }
//         }

//         return (
//           <div>
//             {displayDate && (
//               <div>{isCreated}</div>
//             )}
//           </div>
//         )
//       })} */}

//       <div className="inputbox">
//         {/* 된다면 엔터쳤을때 publish 되게끔 */}
//         <input
//           className="chatinput"
//           type={"text"}
//           placeholder={"메시지를 입력하세요"}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           onKeyPress={onKeyPress}
//         />
//         <button className="chatbtn" onClick={() => publish(message)}>보내기</button>
//       </div>
//     </div>
//   );
// };

// export default OpenViduChat;

import React, { Component } from 'react';
import { Fab, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import './OpenViduChat.css';

export default class OpenViduChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      message: '',
    };
    this.chatScroll = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handlePressKey = this.handlePressKey.bind(this);
    this.close = this.close.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }


  componentDidMount(e) {
    this.props.main.stream.session.on('signal:chat', (event) => {
      const data = JSON.parse(event.data);
      let messageList = this.state.messageList;
      messageList.push({ connectionId: event.from.connectionId, nickname: data.nickname, message: data.message });
      this.setState({ messageList: messageList });
      this.scrollToBottom();
    });
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handlePressKey(event) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  sendMessage() {
    console.log(this.state.message);
    if (this.state.message) {
      let message = this.state.message.replace(/ +(?= )/g, '');
      if (message !== '' && message !== ' ') {
        const data = { message: message, nickname: this.props.nickname, streamId: this.props.main.stream.streamId };
        this.props.main.stream.session.signal({
          data: JSON.stringify(data),
          type: 'chat',
        });
      }
    }
    this.setState({ message: '' });
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.chatScroll.current.scrollTop = this.chatScroll.current.scrollHeight;
      } catch (err) {}
    }, 20);
  }

  render() {
    // const styleChat = { display: this.props.chatDisplay };
    return (
      <div id="chatContainer">
        <div id="chatComponent">
          <div className="message-wrap" ref={this.chatScroll}>
            {this.state.messageList.map((data, i) => (
              <div
                key={i}
                id="remoteUsers"
              >
                <div className="msg-detail">
                  <div className="msg-info">
                    <p> {data.nickname}</p>
                  </div>
                  <div className="msg-content">
                    <span className="triangle" />
                    <p className="text">{data.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="messageInput">
            <input
              placeholder="Send a messge"
              id="chatInput"
              value={this.state.message}
              onChange={this.handleChange}
              onKeyPress={this.handlePressKey}
            />
            <Tooltip title="Send message">
              <Fab size="small" id="sendButton" onClick={this.sendMessage}>
                <SendIcon />
              </Fab>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}
