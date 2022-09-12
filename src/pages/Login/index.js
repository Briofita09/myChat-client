import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LoginContainer, Input, Button, Text } from "./style.js";
import AppContext from "../../context/AuthContext.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AppContext);

  const navigate = useNavigate();

  const user = {
    email,
    password,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", user);
      setToken(response.data.token);
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
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
