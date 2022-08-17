import axios from 'axios';

// console.log(process.env.REACT_APP_BASE_URL);
const request = axios.create({
    baseURL: 'https://reqres.in/api/',
});

export const get = async (path, options = {}) => {
    const respon = await request.get(path, options);

    return respon.data;
};

export const post = async (path, options = {}) => {
    const respon = await request.post(path, options);

    return respon.data;
};

export const dele = async (path, options = {}) => {
    const respon = await request.delete(path, options);

    return respon.data;
};

export const put = async (path, options = {}) => {
    const respon = await request.put(path, options);

    return respon.data;
};

export default request;
