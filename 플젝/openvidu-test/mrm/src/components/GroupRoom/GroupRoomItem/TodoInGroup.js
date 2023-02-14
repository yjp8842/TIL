import React, { useState } from "react";

import Content from '../../DnD/Content';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


// import { createGlobalStyle } from "styled-components";
// import TodoTemplate from "../../DnD/TodoTemplate";
// import TodoHead from "../../DnD/TodoHead";
// import TodoList from "../../DnD/TodoList";
import TodoCreate from "../../DnD/TodoCreate";
// import { TodoProvider } from "../../DnD/TodoContext";
import styled from "styled-components";
// import TodoModal from "../../Modal/TodoModal"


// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #e9ecef
//   }
// `;

const TodoBox = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

    return (
      <div>

      {/* <TodoProvider>
          <TodoTemplate>
            <TodoHead />
            <TodoList />
          </TodoTemplate>
        </TodoProvider> */}
        <Button onClick={onClickButton}>할 일 생성</Button>
          {isOpen && (<TodoCreate
            open={isOpen}
            onClose={() => {
            setIsOpen(false);
          }}
        />)}
        <DndProvider backend={HTML5Backend}>
          <Content />
        </DndProvider>
      </div>
    )

}

export default TodoBox;

const Button = styled.button`
  font-size: 15px;
  padding: 10px 20px;
  border: none;
  background-color: #ffffff;
  border-radius: 10px;
  color: black;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

      // <Box 
      //   sx={{
      //     display: 'flex',
      //     justifyContent: 'space-evenly',
      //     width: '1000px'
      //   }}>
      //   <Box
      //     sx={{
      //       width: "500px",
      //       height: "250px",
      //       marginTop: "20px",
      //       paddingY: '20px',
      //       borderRadius: "30px",
      //       backgroundColor: "#FFFFFF",
      //       boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
      //       display: 'flex',
      //       justifyContent: 'center'
      //     }}>
      //     <h3>할 일</h3>
      //   </Box>
      //   <Box 
      //     sx={{
      //       width: '400px',
      //       height: '250px',
      //       marginTop: "20px",
      //       paddingY: '20px',
      //       borderRadius: "30px",
      //       backgroundColor: "#FFFFFF",
      //       boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
      //       display: 'flex',
      //       justifyContent: 'center'
      //     }}>
      //     <h3>완료한 일</h3>
      //   </Box>
      // </Box>
