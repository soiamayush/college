import axios from "axios"

const base_url = "http://localhost:4000/api/v1"

const axiosInstance = axios.create({
    baseURL : base_url
})

export default axiosInstance;