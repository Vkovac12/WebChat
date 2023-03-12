import Messages from './Messages';
import { useState } from 'react';
import Input from './Input';
import { useEffect } from 'react';
import nextId from "react-id-generator";
import { useNavigate } from 'react-router-dom';
import ChatLogo2 from "../images/ChatLogo2.png"


const ChatRoom=(props)=>{
  const [drone,setDrone]=useState();
  const [messages,setMessages]=useState([]);
  const [appstart, setAppstart]=useState(false)
  const navigate=useNavigate();


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
      if (props.member.username){
      const drone = new window.Scaledrone("JJJs22nmbknRK1Q2",{
      data:props.member,
      });
      setDrone(drone);
      }
      else{
       navigate("/")
      }
       
  },[])

  useEffect(()=>{
    if(drone){
      const room=drone.subscribe("observable-room");

      drone.on('open',error=>{
        if(error){
          return console.error(error);
        }
        setAppstart(true);
        props.setMember({...props.member,id:drone.clientId})
        room.on('data', (data,member)=>{
          setMessages((oldArray)=>[...oldArray,{member, text:data, id:nextId()}])
        });
      });
    }
  },[drone])

  const onSendMessage=(message)=>{
    if(message && appstart){
      drone.publish({
        room:"observable-room",
        message
      });
    }
  }

return(
  <>
  <header>
    <div className="class-header">
    <img 
      src={ChatLogo2} 
      alt="Logo" />
    </div>
  </header>

  <div className="flex-container">
    <Messages
      messages={messages}
      currentMember={props.member}
    /> 
  </div>

    <Input
      onSendMessage={onSendMessage}
    /> 
  </>
)
}

export default ChatRoom;