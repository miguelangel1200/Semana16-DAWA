import axios from "axios";

// const BASE_URL = "https://http-nodejs-production-78a7.up.railway.app/api/v1"
const BASE_URL = "https://back-semana16-production-81ad.up.railway.app/api"

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance