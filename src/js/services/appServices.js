import messagesServices from "./messagesServices";
import { initWebSocket } from "../network";

export const init = async () => {
  messagesServices.getHistory().then((data) => {
    const messages = JSON.stringify(data.messages);
    localStorage.setItem("allMessages", messages);
    initWebSocket();
  });
};
