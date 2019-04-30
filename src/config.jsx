
var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production') ? 'http://www.gwalg.com/backend/v1/api' : '',
    timeout: 72000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'access_token': '49ec71eee48d7399f1c692a19c4092447fff9a799597f79189743521d1d290e31ffb135499e287cc503a0cff51467d54069f773f595323cbc6d24e3e22da607e' 
    }
});

module.exports = axiosInstance;