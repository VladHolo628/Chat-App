import Cookies from "js-cookie";

const defaultUserName = "Я";

class User {
  constructor() {
    this.name = Cookies.get("name") ?? defaultUserName;
  }

  set(name, value) {
    this[name] = value;
    Cookies.set(name, value);
  }
}

export default User;
