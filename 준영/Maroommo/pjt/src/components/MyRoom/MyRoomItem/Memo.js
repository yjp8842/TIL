import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';

import './Memo.css';
// import { TextField } from '@mui/material';

const Memo = () => {

  const [text, setText] = useState('');
  const [list, setList] = useState(() => JSON.parse(window.localStorage.getItem("list")));

  // localStorage.setItem('list', list)

  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleInput = (e) => {
    setText(e.target.value)
  }
  
  const handleButton = (e) => {
    setList([...list, text])
  }

  const deleteMemo = (e) => {
    const remove = list[e.target.id];
    setList(list.filter((text) => text !== remove))
  }

  return (
    <Box
      sx={{
        width: "350px",
        height: "220px",
        // marginTop: "25px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
        textAlign: "center",
        paddingY: "20px"
      }}>
      <h2>MEMO</h2>

      {/* <form id="memo-form"> */}
        <input
          id="memo-input"
          onChange={handleInput}
          // multiline
          rows={8}
          // fullWidth
          placeholder =" 메모 추가"
          // variant="standard"
          // sx={{margin:'3px'}}
        />
        <button onClick={handleButton}>등록</button>
      {/* </form> */}
      <div className='memo-box'>
        {list.map((item, idx) => <div className='memo-list'><p key={idx}>{item}</p><button onClick={deleteMemo} id={idx}>삭제</button></div>)}
      </div>
    </Box>
  );
}

export default Memo;