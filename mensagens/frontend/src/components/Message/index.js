import { MessageDiv } from './styles'


export default function Message({ message, author, publishedAt}) {
  return (
    <MessageDiv>
      <div className='message-title'>
        Autor: Kefflen Moreno Ramos
      </div>
      <div className='message-text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </div>
      <div className='message-footer'>
        Publicado em: 30/03/2022
      </div>
    </MessageDiv>
  )
}