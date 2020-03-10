import axios from "axios";

const addTokenHeader = () => {
  const userToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
};

export default addTokenHeader;
