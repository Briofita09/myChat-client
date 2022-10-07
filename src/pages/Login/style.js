import styled from "styled-components";

export const LoginContainer = styled.div`
  background: ${({ theme }) => theme.material};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1em;
  text-align: center;
  margin-top: 20px;
`;
