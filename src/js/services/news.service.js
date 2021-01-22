import axios from '../plugins/axios';

export async function getNews() {
    try {
        const responce = await axios.get('/news');
        console.log(responce);
        return responce;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}