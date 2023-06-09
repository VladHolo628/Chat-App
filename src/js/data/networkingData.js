import Cookies from "js-cookie";

export const token = Cookies.get("token");

const networkingData = {
  BASE_URL: "https://edu.strada.one/api",
  getHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
  },
};

export default networkingData;
