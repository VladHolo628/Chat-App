import "./forms";

import "./popups";

import "./network";

import "./loadOnScroll";

import Cookies from "js-cookie";
import { init } from "./services/appServices";

const isLoggedIn = Cookies.get("token") && Cookies.get("email");

if (!isLoggedIn) {
  alert("Войдите, чтобы начать");
  return;
}

init();
