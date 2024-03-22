import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "d3450d98a78c6da93741a9cd2dea95a6",
    language: "ko-KR",
  },
});

export default instance;