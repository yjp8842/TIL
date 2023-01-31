import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyRoom from './components/MyRoom/MyRoom';
import GroupRoom from './components/GroupRoom/GroupRoom';
import SignInSide from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import GroupChat from './components/GroupRoom/GroupChat';
import GroupBoard from './components/GroupRoom/Board';
import GroupQnA from './components/GroupRoom/QnA';
// import { Box } from '@mui/system';
// import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/myroom" element={<MyRoom />} />
        <Route path="/group" element={<GroupRoom />} />
        <Route path="/group/chat" element={<GroupChat />} />
        <Route path="/group/board" element={<GroupBoard />} />
        <Route path="/group/qna" element={<GroupQnA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
