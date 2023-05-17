import Cookies from "js-cookie";
const token = Cookies.get("token");
const fetchServices = {
  BASE_URL: "https://edu.strada.one/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export default fetchServices;
