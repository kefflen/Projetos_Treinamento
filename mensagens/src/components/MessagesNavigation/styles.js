import styled from 'styled-components'

export const MessageNavigationDiv = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 470px;
  max-height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`