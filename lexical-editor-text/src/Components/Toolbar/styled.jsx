import { tint } from "polished"
import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  border-radius: 5px;
  padding: 5px;
  min-width: 52px;
  background-color: #1b2733;
  display: flex;
  z-index: 20;
  bottom: 8px;
  left: 20px;
  justify-content: center;

  .button-block + .button-block {
    border-left: 1px solid gray;
    padding: 0 3px;
  }
`