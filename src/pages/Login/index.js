import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "react95";

import { LoginContainer, Text } from "./style.js";
import AppContext from "../../context/AuthContext.js";
import Loading from "../../components/Loading/index.js";
import apiService from "../../services/api.service.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const url = process.env.REACT_APP_API_BASE;
  const { setToken } = useContext(AppContext);

  const navigate = useNavigate();

  const user = {
    email,
    password,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${url}/login`, user);
      setToken(response.data.token);
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LoginContainer>
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
          <Button onClick={handleSubmit} style={{ width: 400, marginTop: 30 }}>
            Login
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text>Faça seu cadastro aqui!</Text>
          </Link>
        </LoginContainer>
      )}
    </>
  );
}
