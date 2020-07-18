import Axios from 'axios';

const BASE_URL = 'https://api.sportsdata.io/v3/soccer/scores/json/'


const axios = Axios.create({
    // withCredentials: true,

});


export const httpService = {
    get(endpoint, data, headers) {
        return ajax(endpoint, 'GET', data, headers)
    },
    post(endpoint, data, headers) {

        return ajax(endpoint, 'POST', data, headers)
    },
    put(endpoint, data, headers) {
        return ajax(endpoint, 'PUT', data, headers)
    },
    delete(endpoint, data, headers) {
        return ajax(endpoint, 'DELETE', data, headers)
    }
}


async function ajax(endpoint, method = 'get', data = null, headers = null) {
    console.log(`${BASE_URL}${endpoint}`)
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            headers
        })
        return res.data;
    } catch (err) {
        console.dir(err);
        console.log(err.response)
            // if (err.response && err.response.status === 401) {

        throw err;
    }
}