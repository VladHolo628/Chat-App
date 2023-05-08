import Cookies from "js-cookie";

export function saveUserDataToCookies(name, value) {
  const fieldName = "user" + name[0].toUpperCase() + name.slice(1);
  Cookies.set(fieldName, value);
}
