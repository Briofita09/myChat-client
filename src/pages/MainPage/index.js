import { useContext, useEffect, useState } from "react";
import axios from "axios";

import AppContext from "../../context/AuthContext.js";
import {
  MainContainer,
  ChannelContainer,
  HeaderButton,
  HeaderContainer,
  HeaderTitle,
  MessageContainer,
  UsersContainer,
  Message,
  User,
  Channel,
} from "./style.js";

export default function MainPage() {
  const [messages, setMessages] = useState([]);
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);
  const { token } = useContext(AppContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get(
          "http://localhost:5000/profile",
          config
        );
        setMessages(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    async function fetchChannels() {
      try {
        const response = await axios.get(
          "http://localhost:5000/all-channels",
          config
        );
        setChannels(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "http://localhost:5000/channel-users/1",
          config
        );
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMessages();
    fetchChannels();
    fetchUsers();
  }, []);

  return (
    <MainContainer>
      <ChannelContainer>
        {channels.map((channel) => {
          return <Channel>{channel.name}</Channel>;
        })}
      </ChannelContainer>
      <MessageContainer>
        <HeaderContainer>
          <HeaderTitle>Olá usuário</HeaderTitle>
          <HeaderButton>Desconectar</HeaderButton>
        </HeaderContainer>
        <Message>Olá Mundo</Message>
        <Message>Olá Mundo</Message>
        <Message>Olá Mundo</Message>
      </MessageContainer>
      <UsersContainer>
        {users.map((user) => {
          return <User>{user.name}</User>;
        })}
      </UsersContainer>
    </MainContainer>
  );
}
