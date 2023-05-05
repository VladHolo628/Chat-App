import { addMessage } from "./messages";

const addMessageForm = document.querySelector(".form");
const addMessageFormInput = addMessageForm.querySelector(".form__input");

const currentUser = {
  name: "Я",
};

addMessageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const messageText = addMessageFormInput.value;
  const messageAuthor = `${currentUser.name}:`;
  addMessage(messageAuthor, messageText);

  event.target.reset();
});
