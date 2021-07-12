import axios from 'axios'
import keys from './env/keys';

function getJwtFromCookie() {
    return document.cookie && document.cookie.includes( keys.JWT)
        ? document.cookie
            .split(';')
            .filter(s => s.includes(keys.JWT))[0]
            .split('=')
            .pop()
        : null
}
const userName = window.location.pathname.split('/')[1]
let Http = axios.create({
    baseURL: `${keys.API_URL}/${userName}`,
    credentials: 'include',

    headers: {
        'content-type': 'application/json',
        'Authorization': getJwtFromCookie()
    }
});

export const HttpSub = axios.create({
    baseURL: `https://calendar.dev.leader.codes/api/${userName}`,
    headers: {
        'content-type': 'application/json',
        'Authorization': getJwtFromCookie()
    }
});

export default Http