import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {String} email 
 * @param {String} password 
 */

export async function login(email, password) {
    try {
        const responce = await axios.post(
            `$/auth/login`, JSON.stringify({email, password}),
        );
        console.log(responce);
        return responce.data;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}