import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "react95";

import { SignUpContainer, Form, Text } from "./style.js";

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
        <h1 style={{ fontSize: 40 }}>Cadastre-se no MyChat</h1>
        <Form onSubmit={handleSubmit}>
          <TextField
            style={{ width: 400, marginTop: 30 }}
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ width: 400, marginTop: 30 }}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ width: 400, marginTop: 30 }}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            style={{ width: 400, marginTop: 30 }}
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button primary style={{ width: 400, marginTop: 30 }}>
            Cadastre-se
          </Button>
        </Form>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Text>Faça seu Login aqui</Text>
        </Link>
      </SignUpContainer>
    </>
  );
}
