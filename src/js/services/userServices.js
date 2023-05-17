import fetchServices from "./fetchServices";

const { BASE_URL, headers } = fetchServices;

const URL = `${BASE_URL}/user`;

const userServices = {
  sendAuthRequest: async (email) => {
    const body = JSON.stringify({ email });

    return fetch(URL, {
      method: "POST",
      headers,
      body,
    }).then((response) => response.json());
  },

  getData: async () => {
    return fetch(`${URL}/me`, { headers }).then((response) => response.json());
  },

  setName: async (name) => {
    const body = JSON.stringify({ name });

    return fetch(`${URL}`, { method: "PATCH", headers, body }).then(
      (response) => response.json()
    );
  },
};

export default userServices;
