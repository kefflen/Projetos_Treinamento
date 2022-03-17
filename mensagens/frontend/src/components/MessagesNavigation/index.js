import Message from "../Message";
import { MessageNavigationDiv } from "./styles";

export default function MessageNavigation({messages}) {

  return (
    <MessageNavigationDiv className="message-navigation">
      <Message />
      <Message />
      <Message />
      <Message />
    </MessageNavigationDiv>
  )
}