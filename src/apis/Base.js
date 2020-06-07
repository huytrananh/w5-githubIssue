const axios = require('axios');

const axiosClient = () => {
    const token = sessionStorage.getItem('token');
    return axios.create(
        {
            baseURL: 'https://api.github.com/',
            timeout: 30000,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `token ${token}`
            }, 
        }
    )
    
}
export default axiosClient;