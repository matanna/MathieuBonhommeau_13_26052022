import * as axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:3001/api/v1",
});

export default instance;
