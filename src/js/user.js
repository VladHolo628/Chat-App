import Cookies from "js-cookie";

const defaultUserName = "Я";

class User {
  constructor() {
    this.name = defaultUserName;
  }

  set(name, value) {
    this[name] = value;
    Cookies.set(name, value);
  }
}

export default User;
