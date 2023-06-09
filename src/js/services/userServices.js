import fetchServices from "../data/networkingData";

const { BASE_URL, getHeaders } = fetchServices;

const URL = `${BASE_URL}/user`;

const userServices = {
  sendAuthRequest: async (email) => {
    const body = JSON.stringify({ email });
    const headers = getHeaders();

    return fetch(URL, {
      method: "POST",
      headers,
      body,
    }).then((response) => response.json());
  },

  getData: async () => {
    return fetch(`${URL}/me`, { headers: getHeaders() }).then((response) =>
      response.json()
    );
  },

  setName: async (name) => {
    const body = JSON.stringify({ name });
    const headers = getHeaders();

    return fetch(`${URL}`, {
      method: "PATCH",
      headers,
      body,
    }).then((response) => response.json());
  },
};

export default userServices;
