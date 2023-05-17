import fetchServices from "./fetchServices";

const { BASE_URL, headers } = fetchServices;

const URL = `${BASE_URL}/messages`;

const messagesServices = {
  async getHistory() {
    return fetch(URL, { headers }).then((response) => response.json());
  },
};

export default messagesServices;
