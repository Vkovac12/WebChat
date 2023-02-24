
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
    username: "tgzgtz",
    color: 'red'
  })

  const handleNameChange = (e) => {
    setMember(oldMember => ({...oldMember, username: e.target.value}))

  }



  return (
     <Router>
      <div className="App">
      <main>
        <Routes>
          <Route path="/" 
          element={
            <Landing 
              handleNameChange={handleNameChange}
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

  );
}

export default App;
