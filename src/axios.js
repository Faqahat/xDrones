import axios from 'axios';
const instance = axios.create({
    baseURL : 'https://backend.xdrones.co/'
});
export default instance;