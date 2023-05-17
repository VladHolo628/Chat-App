import { format } from "date-fns";

const messagesList = document.querySelector(".messages");
const templateSelectors = {
  userMessage: "message-item-template",
  recievedMessage: "message-item-template-recieved",
};

const validateMessage = function (messageText) {
  const messageIsValid = messageText.length > 0;

  return messageIsValid;
};

const createNewMessageItem = function (author, text, time, recieved) {
  const selector = recieved
    ? templateSelectors.recievedMessage
    : templateSelectors.userMessage;
  const messageTemplate = document.getElementById(selector);
  const newMessageItem = messageTemplate.content.cloneNode(true);
  const currentTime = format(time, "HH:mm");

  newMessageItem.querySelector(
    ".messages__item-author"
  ).textContent = `${author}:`;
  newMessageItem.querySelector(".messages__item-text").textContent = text;
  newMessageItem.querySelector(".messages__item-date").textContent =
    currentTime;

  return newMessageItem;
};

export const renderMessage = function (author, text, time, recieved = false) {
  if (!validateMessage(text)) return;

  const newMessage = createNewMessageItem(author, text, time, recieved);

  messagesList.appendChild(newMessage);
  messagesList.scrollTop = messagesList.scrollHeight;
};
