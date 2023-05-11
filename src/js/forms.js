import { renderMessage } from "./messages";
import userServices from "./services/userServices";
import { UserDataSender } from "./user";
import User from "./user";

const addMessageForm = document.querySelector(".form");
const addMessageFormInput = addMessageForm.querySelector(".form__input");

const authForm = document.getElementById("auth-form");
const authInput = authForm.querySelector(".popup__form-input");
const authEnterCodeBtn = authForm.querySelector(".popup__form-btn--enter-code");

const confirmationForm = document.getElementById("confirmation-form");
const conformationInput = confirmationForm.querySelector(".popup__form-input");

const settingsForm = document.getElementById("settings-form");
const settingsInput = settingsForm.querySelector(".popup__form-input");

const currentUser = new User();

const dataSender = new UserDataSender();

addMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageText = addMessageFormInput.value;
  const messageAuthor = `${currentUser.name}:`;

  renderMessage(messageAuthor, messageText);

  e.target.reset();
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const enteredEmail = authInput.value;
  if (!enteredEmail) return;

  currentUser.set("email", enteredEmail);

  userServices.sendAuthRequest(enteredEmail);

  authEnterCodeBtn.disabled = false;

  e.target.reset();
});

confirmationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredToken = conformationInput.value;

  currentUser.set("token", enteredToken);
  e.target.closest(".popup").classList.remove("popup--opened");
});

settingsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentUser.set("name", settingsInput.value);
  userServices.setName(settingsInput.value);

  e.target.reset();
});
