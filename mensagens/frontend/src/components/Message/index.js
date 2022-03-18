import { MessageDiv } from './styles'


export default function Message({message}) {
  const { message: text, author, publishedAt } = message
  return (
    <MessageDiv>
      <div className='message-title'>
        Autor: {author}
      </div>
      <div className='message-text'>
        {text}
      </div>
      <div className='message-footer'>
        Publicado em: {publishedAt}
      </div>
    </MessageDiv>
  )
}