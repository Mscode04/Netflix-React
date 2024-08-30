import axios from "axios"
import { baseUrl } from "./Constants/COnstants";

const instance = axios.create({
    baseURL:baseUrl
});

export default instance