import { socketSendHandler } from "./network";
import { onClosePopupHandler } from "./popups";
import { init } from "./services/appServices";
import userServices from "./services/userServices";
import User from "./user";

const addMessageForm = document.querySelector(".form");
const settingsForm = document.getElementById("settings-form");
const authForm = document.getElementById("auth-form");
const confirmationForm = document.getElementById("confirmation-form");

const authEnterCodeBtn = authForm.querySelector("[data-popup-enter-code-btn]");

export const currentUser = new User();

const selectors = {
  root: "[data-form]",
  input: "[data-form-input]",
};

function handleForm(form, handlerFunction) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = form.querySelector(selectors.input).value;

    handlerFunction(inputValue, event);

    event.target.reset();
  });
}

const addMessageHandler = function (inputValue) {
  const messageText = inputValue;
  if (!messageText) return;
  socketSendHandler(messageText);
};

const authHandler = function (inputValue) {
  const enteredEmail = inputValue;
  if (!enteredEmail) return;

  currentUser.set("email", enteredEmail);

  userServices.sendAuthRequest(enteredEmail);

  authEnterCodeBtn.disabled = false;
};

const confirmationHandler = function (inputValue, event) {
  const enteredToken = inputValue;

  currentUser.set("token", enteredToken);
  init();
  onClosePopupHandler(event);
};

const settingsHandler = function (inputValue) {
  currentUser.set("name", inputValue);
  userServices.setName(inputValue);
};

handleForm(addMessageForm, addMessageHandler);
handleForm(authForm, authHandler);
handleForm(confirmationForm, confirmationHandler);
handleForm(settingsForm, settingsHandler);
