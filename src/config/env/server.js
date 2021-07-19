const isDev = window.location.href.includes('dev.')

module.exports = {
    APP_NAME: 'events gallery',
    /*
     * API URL FOR ALL AJAX CALL
    // */
    API_URL: 'https://events.calendar.dev.leader.codes/api',
    API_BOX:'https://box.leader.codes/api',
    API_FILE:'https://files.codes/api',
    JWT: isDev ? 'devJwt' : 'jwt'
}