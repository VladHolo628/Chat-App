import Cookies from "js-cookie";
import { saveUserDataToCookies } from "./storage";
const defaultUserName = "Я";

const BASE_URL = "https://edu.strada.one/api/user";

class User {
  constructor() {
    this.name = defaultUserName;
  }

  set(name, value) {
    this[name] = value;
    saveUserDataToCookies(name, value);
  }
}

// export class UserDataSender {
//   constructor() {
//     this.token = Cookies.get("userToken");
//     this.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${this.token}`,
//     };
//   }

//   sendAuthRequest(email) {
//     fetch(BASE_URL, {
//       method: "POST",
//       headers: this.headers,
//       body: JSON.stringify({ email }),
//     }).then((response) => response.json());
//   }

//   async getUserData() {
//     const request = await fetch(`${BASE_URL}/me`, {
//       headers: this.headers,
//     });
//     const response = await request.json();

//     return response;
//   }

//   async setUserName(name) {
//     fetch(`${BASE_URL}/me`, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({ name }),
//     })
//       .then((response) => response.json())
//       .then((data) => data);
//   }
//   // async getMessagesHistory() {
//   //   const request = await fetch("https://edu.strada.one/api/messages", {
//   //     method: "GET",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Bearer ${this.token}`,
//   //     },
//   //   });

//   //   const response = await request.json();

//   //   return response;
//   // }
// }

export default User;
