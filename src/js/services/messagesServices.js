import networkingData from "../data/networkingData";

const { BASE_URL, getHeaders } = networkingData;

const URL = `${BASE_URL}/messages`;

const messagesServices = {
  async getHistory() {
    return fetch(URL, { headers: getHeaders() }).then((response) =>
      response.json()
    );
  },
};

export default messagesServices;
