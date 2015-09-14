//= require axios/dist/axios
//= require app

axios.interceptors.request.use(function(config) {
    var token = document.getElementsByName('csrf-token')[0].content;
    config.headers['X-CSRF-Token'] = token;
    return config;
}, function (error) {
    return Promise.reject(error);
});