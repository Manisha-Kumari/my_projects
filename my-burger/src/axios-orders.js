import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://react-my-burger-24b1a.firebaseio.com/'
});


export default instance;