import { MessageWriterDiv } from "./styles";


export default function MessageWriter() {
  return (
    <MessageWriterDiv>
      <div className="author-input">
        <label>Autor: </label>
        <input/>
      </div>
      <div className="message-input">
        <textarea></textarea>
      </div>
    </MessageWriterDiv>
  )
}