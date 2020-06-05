const axios = require('axios');

const axiosClient = axios.create(
    {
        baseURL: 'https://api.github.com/',
        timeout: 30000,
        headers: {"Accept" : "application/vnd.github.machine-man-preview"}
    }
)

export default axiosClient;