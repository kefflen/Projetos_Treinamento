import Message from "../Message";
import { MessageNavigationDiv } from "./styles";


export default function MessageNavigation({messages}) {

  return (
    <MessageNavigationDiv className="message-navigation">
      {messages.map(message => {
        return <Message key={message.id} message={message}/>
      })}
    </MessageNavigationDiv>
  )
}