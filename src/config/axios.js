import axios from 'axios'

const API_URL = 'https://events.calendar.dev.leader.codes/api'

function getJwtFromCookie() {
   
    return document.cookie && document.cookie.includes('devJwt')
        ? document.cookie
            .split(';')
            .filter(s => s.includes('devJwt'))[0]
            .split('=')
            .pop()
        : null

}
const userName = window.location.pathname.split('/')[1]
let Http = axios.create({
    baseURL: `${API_URL}/${window.location.pathname.split('/')[1]}`,
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