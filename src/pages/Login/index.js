import { useState } from "react";
import { Link } from "react-router-dom";

import { LoginContainer, Input, Button, Text } from "./style.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email,
    password,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <LoginContainer>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit}>Login</Button>
        <Link to="/">
          <Text>Faça seu cadastro aqui!</Text>
        </Link>
      </LoginContainer>
    </>
  );
}
