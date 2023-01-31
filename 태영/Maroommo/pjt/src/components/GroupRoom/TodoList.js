import React from "react";
// import './TodoList.css'
import { Box } from "@mui/system";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TodoBox from "./TodoBox";
import { ItemTypes } from "./Constants";



export default function TodoList () {

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.todobox,
      drop: () => ItemTypes.box,
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
  )



  return (


    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          width: "100vw",
          height: "25vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#ebe5d1",
        }}>

        <Box

          sx={{
            width: "40vw",
            height: "20vh",
            marginLeft: "15px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-evenly",
            flexWrap: 'wrap'
          }}>
          <TodoBox/>         
        </Box> 
        <Box
          sx={{
            width: "40vw",
            height: "20vh",
            marginLeft: "15px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-evenly",
            flexWrap: 'wrap'
          }}>
        </Box>
      </Box>
    </DndProvider>
  )
}