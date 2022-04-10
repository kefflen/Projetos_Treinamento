import './App.css';
import MessageNavigation from './components/MessagesNavigation';
import MessageWriter from './components/MessageArea/Index';
import api from './services/api';
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://192.168.15.22:8080')

function App() {
  let [messages, setMessages] = useState([])
  
  useEffect(function () {
    socket.off('new_message')
    socket.on('new_message', message => {
      let newMessages = [message, ...messages]
      setMessages(() => newMessages)
    })
  }, [messages])

  useEffect(() => {
    api.get('/messages?take=10')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  return (
    <div className="App">
      <MessageNavigation messages={messages}/>
      <MessageWriter />
    </div>
  );
}

export default App;

