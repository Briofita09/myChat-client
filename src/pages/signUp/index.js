import { useState } from "react";
import { Link } from "react-router-dom";

import {
  SignUpContainer,
  SignUpTitle,
  Form,
  Input,
  Button,
  Text,
} from "./style.js";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const user = {
    name,
    password,
    email,
    confirmPassword,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <SignUpContainer>
        <SignUpTitle>Cadastre-se no MyChat</SignUpTitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button>Cadastre-se</Button>
        </Form>
        <Link to="/login">
          <Text>Faça seu Login aqui</Text>
        </Link>
      </SignUpContainer>
    </>
  );
}
