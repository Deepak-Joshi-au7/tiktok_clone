import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokbackend1995.herokuapp.com/",
});

export default instance;
