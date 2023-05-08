import Cookies from "js-cookie";
import { saveUserDataToCookies } from "./storage";
const defaultUserName = "Я";
export class User {
  constructor() {
    this.name = defaultUserName;
  }
  set(name, value) {
    this[name] = value;
    saveUserDataToCookies(name, value);
  }
}

export class UserDataSender {
  constructor() {
    this.token = Cookies.get("userToken");
  }
  async sendAuthRequest(email) {
    const request = await fetch("https://edu.strada.one/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ email: email }),
    });
    const response = await request.json();

    return response;
  }
  async getUserData() {
    const request = await fetch("https://edu.strada.one/api/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    const response = await request.json();

    return response;
  }
  async setUserName(name) {
    try {
      const request = await fetch("https://edu.strada.one/api/user/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: {
          body: JSON.stringify({ name: name }),
        },
      });

      const response = await request.json();

      return response;
    } catch (e) {
      alert(e.message);
    }
  }
  async getMessagesHistory() {
    const request = await fetch("https://edu.strada.one/api/messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    const response = await request.json();

    return response;
  }
}
