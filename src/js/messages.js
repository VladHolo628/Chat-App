import { format } from "date-fns";

const messagesList = document.querySelector(".messages");
const messageTemplate = document.getElementById("message-item-template");

class Message {
  sendMessage() {
    //
  }

  getMessages() {}
}

const validateMessage = function (messageText) {
  const messageIsValid = messageText.length > 0;

  return messageIsValid;
};

const createNewMessageItem = function (author, text, recieved) {
  const newMessageItem = messageTemplate.content.cloneNode(true);
  const currentTime = format(new Date(), "HH:mm");

  newMessageItem.querySelector(".messages__item-author").textContent = author;
  newMessageItem.querySelector(".messages__item-text").textContent = text;
  newMessageItem.querySelector(".messages__item-date").textContent =
    currentTime;

  if (recieved) {
    newMessageItem.classList.add("messages__item--recieved");
  }

  return newMessageItem;
};

export const renderMessage = function (author, text, recieved = false) {
  if (!validateMessage(text)) return;

  const newMessage = createNewMessageItem(author, text, recieved);
  messagesList.appendChild(newMessage);
  messagesList.scrollTop = messagesList.scrollHeight;
};
