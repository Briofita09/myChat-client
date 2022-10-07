import styled from "styled-components";

export const SignUpContainer = styled.div`
  background: ${({ theme }) => theme.material};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: 1px solid green;
  border-radius: 10px;
  background-color: green;
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
  font-size: 0.85em;
  text-align: center;
  margin-top: 20px;
`;
