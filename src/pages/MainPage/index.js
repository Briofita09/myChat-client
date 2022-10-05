import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { socket } from "../../services/socket.js";

import AppContext from "../../context/AuthContext.js";
import {
  Author,
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
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const { token } = useContext(AppContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function fetchMessages() {
    const response = await axios.get("http://localhost:5000/messages", config);
    setMessages(response.data);
  }

  useEffect(() => {
    socket.on("newMessage", (data) => {
      fetchMessages();
    });
  });

  useEffect(() => {
    socket.removeAllListeners();
    socket.emit("channelConnect", { channel, profile });
    socket.on("channelConnect", async (data) => {
      fetchMessages();
      fetchUsers(data.channel);
    });
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
    fetchMessages();
    fetchProfile();
    fetchChannels();
  }, [channel]);

  async function fetchUsers(id) {
    const response = await axios.get(
      `http://localhost:5000/channel-users/${id}`,
      config
    );
    setUsers(response.data);
  }

  async function channelConnect(id) {
    try {
      await axios.post(`http://localhost:5000/channels/${id}`, {}, config);
      setChannel(id);
      fetchUsers(id);
    } catch (err) {
      console.log(err);
    }
  }

  async function disconnectChannel() {
    await axios.delete("http://localhost:5000/channels", config);
    setChannel(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      socket.emit("newMessage", { profile, channel, message });
      setMessage("");
    } catch (err) {
      console.log(err);
    }
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
          {messages.map((m) => {
            return (
              <Message>
                <Author>{m.author.name} disse:</Author> {m.text}
              </Message>
            );
          })}
        </MessageBox>
        <InputContainer>
          <Input
            type="text"
            placeholder="Escreva sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <InputButton onClick={handleSubmit}>Enviar</InputButton>
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
