import { tint } from "polished"
import styled from "styled-components"

export const Container = styled.button`
  padding: 0 1px;
  background-color: ${props => props.active? tint(.1, "#1b2733af"): 'transparent'};
  padding: 1px;
  border: none;
  :hover {
    background-color: ${tint(.1, "#1b2733")};
  }
  
  svg {
    padding: 2px;
    color: gray;
    width: 0.875rem;
    height: 0.875rem;
  }
`