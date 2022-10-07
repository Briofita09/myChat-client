import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.material};
`;

export const ChannelContainer = styled.div`
  height: 100vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MessageContainer = styled.div`
  height: 100vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0;
`;

export const MessageBox = styled.div`
  height: 90%;
  overflow: hidden;
`;

export const Message = styled.p`
  margin-left: 5%;
  font-weight: 400;
`;

export const HeaderContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const UsersContainer = styled.div`
  width: 25vw;
  height: 90vh;
  margin-top: 40px;
`;

export const HeaderTitle = styled.h1`
  font-size: 1em;
  margin-left: 5%;
`;

export const HeaderButton = styled.button`
  border: 1px solid green;
  background-color: green;
  font-family: "Orbitron", sans-serif;
  color: #fff;
  align-self: center;
  margin-right: 5%;
  width: 15%;
  min-width: 120px;
  max-width: 120px;
  height: 80%;
  font-size: 0.8rem;
  :hover {
    cursor: pointer;
  }
`;

export const User = styled.p`
  margin-left: 5%;
  font-family: "Orbitron", sans-serif;
  font-size: 600;
  font-size: 1.3rem;
  text-align: center;
`;

export const Channel = styled.button`
  margin-top: 15%;
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  :hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.form`
  width: 80vw;
  height: 10vh;
  margin-top: 0;
  display: flex;
  align-items: baseline;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  text-align: start;
  width: 100%;
  border: none;
`;

export const InputButton = styled.button`
  border: 1px solid green;
  background-color: green;
  font-family: "Orbitron", sans-serif;
  color: #fff;
  align-self: center;
  width: 15%;
  min-width: 120px;
  max-width: 120px;
  height: 80%;
  font-size: 0.8rem;
  :hover {
    cursor: pointer;
  }
`;

export const Author = styled.span`
  font-weight: bolder;
`;
