import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Input = styled.input`
  background-color: transparent;
  font-family: "Orbitron", sans-serif;
  border: 2px solid green;
  border-radius: 10px;
  display: block;
  width: 50%;
  margin: 20px auto;
  outline: none;
  height: 30px;
  &&focus {
    outline: none;
  }
  ::placeholder {
    font-weight: 700;
    font-style: italic;
    font-family: "Orbitron", sans-serif;
  }
  @media (max-width: 800px) {
    margin-left: 0;
    width: 50%;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #4e97d1;
  font-family: "Orbitron", sans-serif;
  color: #fff;
  margin: 15px auto;
  width: 300px;
  height: 40px;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    width: 250px;
  }
`;

export const Text = styled.p`
  font-family: "Orbitron", sans-serif;
  font-size: 0.85em;
`;
