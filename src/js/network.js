import Cookies from "js-cookie";
import { renderMessage } from "./messages";
import { token } from "./data/networkingData";

const URL = `wss://edu.strada.one/websockets?${token}`;
const socket = new WebSocket(URL);

export const socketSendHandler = function (messageText) {
  const dataToSend = JSON.stringify({ text: messageText });

  socket.send(dataToSend);
};

const socketOnMessageHandler = function (data) {
  const { text, createdAt } = data;
  const { email, name } = data?.user;

  const time = new Date(createdAt);

  const isRecieved = email !== Cookies.get("email");

  renderMessage(name, text, time, isRecieved);
};

export const initWebSocket = function () {
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    socketOnMessageHandler(data);
  };
};
