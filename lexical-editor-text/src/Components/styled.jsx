import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 0.5px 0.3em black;
  margin: 10px;
  
  .edit-block {
    outline: none;
    height: 450px;
    padding: 15px;
    overflow: hidden;
    overflow-y: scroll;
    text-overflow: ellipsis;
    resize: none;
    
    ::-webkit-scrollbar {
      display: none;
    }
    
  } 
  .placehoder {
    position: absolute;
    top: 15px;
    left: 15px;
    pointer-events: none;
    user-select: none;
    color: gray;
  }
`