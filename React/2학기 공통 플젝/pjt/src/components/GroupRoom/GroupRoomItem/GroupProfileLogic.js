import { useState } from "react";
import './Profile.css'

import { BiPencil } from 'react-icons/bi';
import PersonIcon from '@mui/icons-material/Person';

import './Profile.css';

export function InputSample(){
  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');

  const onChange1 = (e) => {
    setName(e.target.value);
  }
  const onChange2 = (e) => {
    setIntro(e.target.value);
  }

  function onChange3() {
    const inputText = document.getElementById('input-text');
    const inputSample = document.getElementById('input-sample');
    // console.log(inputSample.classList.contains('display'))
    inputSample.classList.add('display');
    inputText.classList.remove('display');
    localStorage.setItem('name', setName);
    localStorage.setItem('intro', setIntro);
  }

  // const changeName = localStorage.getItem('name');
  // const changeIntro = localStorage.getItem('intro');

  function onChange() {
    const inputText = document.getElementById('input-text');
    const inputSample = document.getElementById('input-sample');
    // console.log(inputSample.classList.contains('display'))
    inputSample.classList.remove('display');
    inputText.classList.add('display');
    // localStorage.removeItem('name', setName);
    // localStorage.removeItem('intro', setIntro);
  }

  // const inputText = document.getElementById('input-text');
  // const inputForm = document.getElementById('input-form');
  

  return (
    // <div>
    //   {/* <div className="update" id="input-text">
    //     <h3>{name}SSAFY</h3>
    //     <h3>{intro}</h3>
    //   </div> */}
    //   <div className="update" id="input-form">
    //     <input onChange={onChange1} value={name} />
    //     <input onChange={onChange2} value={intro} />
    //   </div>
    // </div>
    <div>
      <div className='pencil'><BiPencil size='25' onClick={onChange} /></div>
      <div className='inbox1'>
        <PersonIcon
          sx={{
            width: "120px",
            height: "120px",
          }}>
        </PersonIcon>
        <div className='display' id='input-sample'>
          <input onChange={onChange1} value={name} />
          <input onChange={onChange2} value={intro} />
          <button onClick={onChange3}>submit</button>
        </div>
        <div className="update" id="input-text">
          {/* <h3>SSAFY</h3>
          <h3>같이 취뽀하자!</h3> */}
          <h3>{name}</h3>
          <h3>{intro}</h3>
        </div>
      </div>
    </div>
  )
}