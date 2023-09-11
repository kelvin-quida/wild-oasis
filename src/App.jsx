import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'

export default function App() {

 
 const StyledApp = styled.div`
 background-color: orangered;
 padding: 20px;
 `

  return (
    <StyledApp>
      <GlobalStyles />
      <Heading as="h1">The Wild Oasis</Heading>

      <Heading as="h2">Check in and out</Heading>
      <Button>Check in</Button>
      <Button>Check out</Button>

      <Heading as="h3">Form</Heading>
      <Input type="number" placeholder="Number of guests" />
      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
  )
}
