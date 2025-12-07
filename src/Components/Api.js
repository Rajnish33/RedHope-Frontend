import axios from "axios";

const baseURL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ? "http://localhost:3177/"
  : "https://red-hope-backend.vercel.app/";

export default axios.create({ baseURL: baseURL });
