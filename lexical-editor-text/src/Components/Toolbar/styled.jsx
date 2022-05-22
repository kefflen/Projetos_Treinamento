import { tint } from "polished"
import styled from "styled-components"

export const Container = styled.div`
  padding: 5px;
  min-width: 52px;
  background-color: #1b2733;
  display: flex;
  position: fixed;
  z-index: 20;
  bottom: 8px;
  justify-content: center;

  .button-block + .button-block {
    border-left: 1px solid gray;
    padding-left: 2px;
  }
`