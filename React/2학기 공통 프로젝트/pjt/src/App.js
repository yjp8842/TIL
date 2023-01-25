import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyroomButton from './components/myroom/myroom';
import Grouproom from './components/grouproom/grouproom';
import SignInSide from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
// import { Box } from '@mui/system';
// import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/myroom" element={<MyroomButton />} />
        <Route path="/group" element={<Grouproom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
