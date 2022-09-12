import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ChannelContainer = styled.div`
  height: 100vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-right: 5px solid black;
`;

export const MessageContainer = styled.div`
  height: 90vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.h2`
  font-size: 1em;
  font-family: "Orbitron", sans-serif;
`;

export const HeaderContainer = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid black;
`;

export const UsersContainer = styled.div`
  width: 25vw;
  height: 90vh;
  border-bottom: 5px solid black;
  border-left: 5px solid black;
`;

export const HeaderTitle = styled.h1`
  font-size: 1em;
  font-family: "Orbitron", sans-serif;
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
  font-size: 2rem;
  text-align: center;
`;

export const Channel = styled.p`
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  :hover {
    cursor: pointer;
  }
`;
