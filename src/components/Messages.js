// import renderMessage from "../functions/renderMessage";
import React from "react";



const Messages=(props)=>{
    const {messages} = props;

    function renderMessage(message) {
        console.log(message);
        console.log(props);
        const {member, text} = message;
        const {currentMember} = props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ?
          "Messages-message currentMember" : "Messages-message";
        return (
          <li className={className}>
            {/* <span
              className="avatar"
              style={{backgroundColor: member.clientData.color}}
            > */}
            <img className="avatar" src={member.clientData.color} alt=""/>
            {/* </span> */}
            
            <div className="Message-content">
              <div className="username">
                {member.clientData.username}
              </div>
              <div className="text">{text}</div>
            </div>
          </li>
        );
      }

    return(
        <ul className="Messages-list">
            {messages.map(m => 
                renderMessage(m))
            }
      </ul>
    )
}

export default Messages;