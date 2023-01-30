import { useState } from "react";
import './Profile.css'

export function InputSample(){
  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');

  const onChange1 = (event) => {
      setName(event.target.value);
  }
  const onChange2 = (event) => {
      setIntro(event.target.value);
  }

  // const inputText = document.getElementById('input-text');
  // const inputForm = document.getElementById('input-form');
  

  return (
    <div>
      {/* <div className="update" id="input-text">
        <h3>{name}SSAFY</h3>
        <h3>{intro}</h3>
      </div> */}
      <div className="update" id="input-form">
        <input onChange={onChange1} value={name} />
        <input onChange={onChange2} value={intro} />
      </div>
    </div>
  )
}