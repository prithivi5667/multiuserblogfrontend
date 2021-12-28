const withCSS = require('@zeit/next-css')
module.exports = {
    publicRuntimeConfig: {
        APP_NAME: 'SEOBLOG',
        API_DEVELOPMENT: 'https://blogbackendpt.herokuapp.com/api',
        API_PRODUCTION: 'https://blogbackendpt.herokuapp.com/api',
        PRODUCTION: true,
        DOMAIN_DEVELOPMENT: 'https://unruffled-mestorf-354238.netlify.app',
        DOMAIN_PRODUCTION: 'https://unruffled-mestorf-354238.netlify.app',
        FB_APP_ID: 1344095629356238,
        DISQUS_SHORTNAME: 'karmegam-in',
        GOOGLE_CLIENT_ID: '1038422740198-93tppd5fa15pridlk0445usaldanppb7.apps.googleusercontent.com',
    }
};  