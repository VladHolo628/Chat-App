import "./forms";
import { renderMessage } from "./messages";
import "./popups";
import messagesServices from "./services/messagesServices";

const history = messagesServices.getHistory();

const init = () => {
  messagesServices.getHistory().then((data) => {
    const messages = data.messages;
    messages.forEach((message) => {
      renderMessage(
        message.user.name,
        message.text,
        new Date(message.createdAt),
        true
      );
    });
  });
};

init();

console.log(history);
