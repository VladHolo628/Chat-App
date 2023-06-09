import Cookies from "js-cookie";
import { renderMessage } from "./messages";

const range = {
  start: 0,
  step: 30,
};

const appScreen = document.querySelector(".messages");

const allMessages = JSON.parse(localStorage.getItem("allMessages"));

const showMessages = function (messages) {
  const currentScrollHeight = appScreen.scrollHeight;
  messages.forEach((message) => {
    const isRecieved = message.user.email !== Cookies.get("email");

    renderMessage(
      message.user.name,
      message.text,
      new Date(message.createdAt),
      isRecieved
    );
  });

  const scrollDiff = appScreen.scrollHeight - currentScrollHeight;
  appScreen.scrollTop += scrollDiff;
};

appScreen.addEventListener("scroll", () => {
  if (appScreen.scrollTop === 0) {
    range.start = range.start + range.step;
    const messagesToShow = allMessages.splice(0, range.step);
    showMessages(messagesToShow);
  }
});

showMessages(allMessages.splice(0, range.step));
