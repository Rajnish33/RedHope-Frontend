import axios from "axios";

// const baseURL = "http://localhost:3177/";
const baseURL = "https://red-hope-backend.vercel.app/";

export default axios.create({ baseURL: baseURL });
