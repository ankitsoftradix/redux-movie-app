import axios from "axios";
import { APIKey } from "./movieApiKey";

export default axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${APIKey}`,
});
