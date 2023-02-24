
import Landing from './components/Landing';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Messages from './components/Messages';
import { useState } from 'react';
import Input from './components/Input';
import { useEffect } from 'react';




function App() {

  const [drone,setDrone]=useState();
  const [messages,setMessages]=useState([]);
  const [user,setUser]=useState({
    username: 'randomName()',
    color: 'red'
  })


  function randomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }


  useEffect(()=>{
    const drone = new window.Scaledrone("JJJs22nmbknRK1Q2",{
      data:user,
    });
    setDrone(drone);
  },[])

  useEffect(()=>{
    if(drone){
      const room=drone.subscribe("observable-room");

      drone.on('open',error=>{
        if(error){
          return console.error(error);
        }
        setUser({...user,id:drone.clientId})

        room.on('data', (data,member)=>{
          setMessages((oldArray)=>[...oldArray,{member, text:data}])
        });
      });
    }
  },[drone])

  useEffect(()=>{
    console.log('messages',messages);
  },[messages])


  const onSendMessage=(message)=>{
    if(message){
      drone.publish({
        room:"observable-room",
        message
      });
    }
  }

  return (
    // <Router>
      <div className="App">

        <Messages
          messages={messages}
          currentMember={user}
        /> 
        <Input
          onSendMessage={onSendMessage}
        />


      {/* <Header />       
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ChatRoom" element={<ChatRoom />} />
        </Routes>
      </main>
        <Footer /> */}
      </div>    
    // </Router>

  );
}

export default App;
