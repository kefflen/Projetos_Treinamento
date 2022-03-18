import { useState } from "react";
import api from "../../services/api";
import { MessageWriterDiv } from "./styles";


export default function MessageWriter() {
  const [author, setAuthor] = useState('any_user')
  const [message, setMessage] = useState('')


  function sendMessage() {
    
    if ([author, message].every(value => value && value.length > 1)) {
      api.post('/messages', {
        author, message
      })
    }
    
    setMessage('')
  }

  function onKeyPress(event) {
    var key = window.event.keyCode;
    if (key === 13) {
      sendMessage()
    }
}

  return (
    <MessageWriterDiv>
      <div className="author-input">
        <label>Autor: </label>
        <input value={author} onChange={event => setAuthor(event.value)}/>
      </div>
      <div className="message-input">
        <textarea value={message} onKeyDown={onKeyPress} onChange={event => {
          let text = event.target.value.replace(/(\r\n|\n|\r)/gm, "")
          setMessage(text)
          }}>
        </textarea>
      </div>
      <button onClick={sendMessage}>Enviar mensagem</button>
    </MessageWriterDiv>
  )
}