import React, { useRef } from 'react'
import { useState } from 'react'
import "./message.css"
export const Messages = () => {
    const [msgdms, setMsgdms] = useState([])
    const ref = useRef()

    const sendMessage = () =>{
        console.log("state", msgdms)
        // const msg = ref.current.value;
        setMsgdms(...msgdms,ref.current.value)
    }
  return (
    <div className='message-container'>


    <div className='message-input'>
        <input type="text" ref= {ref} placeholder = "type something" />
        <button onClick = {sendMessage}>send</button>
    </div>
    </div>
  )
}
