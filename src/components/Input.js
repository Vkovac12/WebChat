import React from "react";
import { useState } from "react";

const Input=(props)=>{
    const [text, setText]=useState('')

    function onChange(e){
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        setText("");
        props.onSendMessage(text)
    }

    return(
        <div className="Input">
        <form onSubmit={e => onSubmit(e)}>
        <input
          onChange={e => onChange(e)}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autofocus="true"
        />
        <button>➤</button>
      </form>
    </div>
    )

}


export default Input;