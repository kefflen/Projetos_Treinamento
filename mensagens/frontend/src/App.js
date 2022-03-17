import logo from './logo.svg';
import './App.css';
import MessageNavigation from './components/MessagesNavigation';
import MessageWriter from './components/MessageArea/Index';
function App() {
  return (
    <div className="App">
      <MessageNavigation />
      <MessageWriter />
    </div>
  );
}

export default App;

