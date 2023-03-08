import Landing from './components/Landing';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import ChatRoom from './components/ChatRoom';
import { useState } from 'react';


function App() {
  const [member, setMember]=useState({
    username: "",
    color: 'Yellow'
  })

  const handleNameChange = (e) => {
    setMember(oldMember => ({...oldMember, username: e.target.value}))

  }

  const handleAvatarChange =(e)=>{
    setMember(oldMember => ({...oldMember, color: e.target.src}))
    e.target.style.border = '4px solid gray'
  }



  return (
    <>
    
     <Router>
      <div className="App">
      <main>
        <Routes>
          <Route path="/" 
          element={
            <Landing 
              handleNameChange={handleNameChange}
              handleAvatarChange={handleAvatarChange}
              member={member}
            />} />
          <Route path="/ChatRoom" 
          element={
            <ChatRoom 
              member={member}
              setMember={setMember}
            />} />
        </Routes>
      </main>
        
      </div>    
    </Router>
    
    
    </>
  );
}

export default App;
