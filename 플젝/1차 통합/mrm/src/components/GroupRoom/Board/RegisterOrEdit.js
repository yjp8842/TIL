import React from "react";
import { Link } from "react-router-dom";


function RegisterOrEdit(props) {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <form onSubmit={props.handleSubmit}>
        <br/>
        <div style={{ maxWidth: "700px", margin: "2rem" }}>
          <label>제목 :</label>
          <br></br>
          <input onChange={props.handleRegisterChange}
            value={props.titleValue} type='text' name='title'/>
          <hr></hr>
            <textarea onChange={props.handleRegisterChange}
            value={props.contentValue} name='content'/>
        </div>
        <button onClick={props.handleSubmit}>
          {props.updateRequest ? "수정" : "등록"}
        </button>
      </form>
      <Link to='/group/board'>
        <button>뒤로가기</button>
      </Link>
    </div>
  )
}

export default RegisterOrEdit