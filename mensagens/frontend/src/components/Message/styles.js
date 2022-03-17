import styled from 'styled-components'

export const MessageDiv = styled.div`
  width: 100%;
  background-color: #deceff;
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 10px;

  .message-title {
    display: flex;
    justify-content: flex-start;
    font-size: 1.25rem;
    color: indigo;
    border-bottom: solid 1px #333;
  }

  .message-text {
    display: flex;
    padding: 10px 0px 10px 0px;
    height: 100px;
    overflow: hidden;
    max-width: 100vw;
  }

  .message-footer {
    border-top: solid 1px #333;
    display: flex;
    justify-content: flex-end;
    font-size: 0.90rem;
  }
`