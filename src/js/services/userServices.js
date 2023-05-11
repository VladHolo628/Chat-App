import Cookies from "js-cookie";

const BASE_URL = "https://edu.strada.one/api/user";

const token = Cookies.get("userToken");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const userServices = {
  sendAuthRequest: async (email) => {
    const body = JSON.stringify({ email });

    return fetch(BASE_URL, {
      method: "POST",
      headers,
      body,
    }).then((response) => response.json());
  },

  getData: async () => {
    return fetch(`${BASE_URL}/me`, { headers }).then((response) =>
      response.json()
    );
  },

  setName: async (name) => {
    const body = JSON.stringify({ name });

    return fetch(`${BASE_URL}/me`, { method: "PATCH", headers, body }).then(
      (response) => response.json()
    );
  },
};

export default userServices;
