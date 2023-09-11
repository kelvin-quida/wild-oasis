import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Button from './ui/Button'
import Input from './ui/Input'

export default function App() {

  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: yellow;
  `
 
 const StyledApp = styled.div`
 background-color: orangered;
 padding: 20px;
 `

  return (
    <StyledApp>
      <GlobalStyles />
      <H1>askdhsajkldhjl</H1>
      <Button>Check in</Button>
      <Button>Check out</Button>

      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
  )
}
