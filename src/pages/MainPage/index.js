import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import AppContext from "../../context/AuthContext.js";
import {
  MainContainer,
  ChannelContainer,
  HeaderButton,
  HeaderContainer,
  HeaderTitle,
  MessageContainer,
  MessageBox,
  UsersContainer,
  Message,
  User,
  Channel,
  InputContainer,
  Input,
  InputButton,
} from "./style.js";

export default function MainPage() {
  const [profile, setProfile] = useState([]);
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);
  const [channel, setChannel] = useState();
  const { token } = useContext(AppContext);

  const socket = io("http://localhost:5000");
  socket.emit("channelConnect", { channel });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get(
          "http://localhost:5000/profile",
          config
        );
        setProfile(response.data);
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
    fetchProfile();
    fetchChannels();
    fetchUsers();
  }, [channel]);

  async function channelConnect(id) {
    const socket = io("http://localhost:5000");
    socket.emit("channelConnect", { channel });
    await axios.post(`http://localhost:5000/channels/${id}`, {}, config);
    setChannel(id);
  }

  async function disconnectChannel() {
    await axios.delete("http://localhost:5000/channels", config);
    setChannel(null);
  }

  return (
    <MainContainer>
      <ChannelContainer>
        {channels.map((channel) => {
          return (
            <Channel
              key={channel.id}
              onClick={() => channelConnect(channel.id)}
            >
              {channel.name}
            </Channel>
          );
        })}
      </ChannelContainer>
      <MessageContainer>
        <HeaderContainer>
          <HeaderTitle>
            {profile.channel
              ? `Olá ${profile.name}, você está no canal ${profile.channel}`
              : `Olá ${profile.name}, conecte a um canal para conversar`}
          </HeaderTitle>
          <HeaderButton onClick={disconnectChannel}>Desconectar</HeaderButton>
        </HeaderContainer>
        <MessageBox>
          <Message>Olá Mundo</Message>
          <Message>Olá Mundo</Message>
          <Message>Olá Mundo</Message>
          <Message>Olá Mundo</Message>
        </MessageBox>
        <InputContainer>
          <Input type="text" placeholder="Escreva sua mensagem" />
          <InputButton>Enviar</InputButton>
        </InputContainer>
      </MessageContainer>
      <UsersContainer>
        {users.map((user) => {
          return <User>{user.name}</User>;
        })}
      </UsersContainer>
    </MainContainer>
  );
}
