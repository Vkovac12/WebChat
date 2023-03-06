import Messages from './Messages';
import { useState } from 'react';
import Input from './Input';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';

const ChatRoom=(props)=>{
  const [drone,setDrone]=useState();
  const [messages,setMessages]=useState([]);
  const [appstart, setAppstart]=useState(false)
 


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
    
      console.log("compoemnta se renderala",props.member);
      const drone = new window.Scaledrone("JJJs22nmbknRK1Q2",{
      data:props.member,
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
        setAppstart(true);
        console.log(props);
        props.setMember({...props.member,id:drone.clientId})

        room.on('data', (data,member)=>{
          setMessages((oldArray)=>[...oldArray,{member, text:data}])
        });
      });
    // }
    }
  },[drone])

  useEffect(()=>{
    console.log('messages',messages);
  },[messages])


  const onSendMessage=(message)=>{
    if(message && appstart){
      drone.publish({
        room:"observable-room",
        message
      });
    }
  }

  // user.username="Mate"
  // console.log('user je:',user);

//   const onScrollHandler = () => {
//     const acceptableScrollOffset = 20
//     const scrollHeight = scrollbarRef.current.getScrollHeight()
//     const scrollTop = scrollbarRef.current.getScrollTop()
//     const clientHeight = scrollbarRef.current.getClientHeight()

//     if (scrollHeight - scrollTop - clientHeight < acceptableScrollOffset) {
//         setToBeScrolled(true)
//     }
//     else {
//         setToBeScrolled(false)
//     }
// }

//   useEffect(() => {
//     if (toBeScrolled) {
//       scrollbarRef.current.scrollToBottom()
//     }
//   }, [messages])

return(
  <>
  <div className="flex-container">
    
      <Messages
      messages={messages}
      currentMember={props.member}
      /> 
      <Input
      onSendMessage={onSendMessage}
      /> 
    
    {/* <Scrollbars
    style={{ width: '100%', height: '100%' }}
    >
      <div>haloo
      </div>
    </Scrollbars> */}
    </div>
  </>
)
}

export default ChatRoom;