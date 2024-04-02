import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical"; 
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import useLoginGoogle from "./useLogin copy";
import {FaGoogle} from 'react-icons/fa'

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login,isLoging} = useLogin()
  const {login: loginGoogle, isLoging: isLogingGoogle} = useLoginGoogle()

  function handleSubmit(e) {
    e.preventDefault()
    if(!email || !password) return 

    login(
      {email,password},
      {onSettled:()=>{
        setPassword('')
      }}
      )
  }

  function handleLoginGoogle(){
    loginGoogle()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoging}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoging}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoging}>
          {!isLoging ? 'Login' : <SpinnerMini/>}
        </Button>
        
        <Button size="large" onClick={handleLoginGoogle} disabled={isLogingGoogle}>
          Login with Googlee  <FaGoogle />
        </Button>
      </FormRowVertical>
    </Form>


  );
}

export default LoginForm;
