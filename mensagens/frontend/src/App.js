import './App.css';
import MessageNavigation from './components/MessagesNavigation';
import MessageWriter from './components/MessageArea/Index';
import api from './services/api';
import { useEffect, useState } from 'react'

function App() {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    api.get('/messages')
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

