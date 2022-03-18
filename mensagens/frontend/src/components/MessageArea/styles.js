import styled from "styled-components";

export const MessageWriterDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  padding: 5px;
  background-color: #523a62;
  border-radius: 10px;
  color: white;

  button {
    padding: 10px;
    background-color: #794c93;
    position: relative;
  }

  .author-input {
    display: flex;
    align-items: baseline;
    color: inherit;
    
    margin-bottom: 5px;
    input {
      color: inherit;
      font-weight: 500;
      font-size: 1.1rem;
      width: 100%;
      border-radius: 5px;
      border: none;
      margin-left: 5px;
      padding: 5px;
      background-color: #333;
      
      :focus {
        outline: none;
      }
    }
  }

  .message-input {
    color: inherit;
    display: flex;
    height: 100%;
    width: 100%;

    textarea {
      border: none;
      color: inherit;
      font-size: 1.25rem;
      font-weight: 500;
      font-family: inherit;
      width: 100%;
      background-color: #333;

      :focus {
        outline: none;
      }
    }
  }
`