import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8c265.firebaseio.com/'
});

export default instance;
