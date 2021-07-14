const isDev = window.location.href.includes('dev.')

module.exports = {
    APP_NAME: 'events gallery',
    /*
     * API URL FOR ALL AJAX CALL
    // */
    API_URL: 'https://events.calendar.dev.leader.codes/api',
    JWT: isDev ? 'devJwt' : 'jwt'
}