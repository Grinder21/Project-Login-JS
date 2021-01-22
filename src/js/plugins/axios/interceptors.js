const lsTokenKey = 'my_app_token';

function setToken(req) {
    const isAuthUrl = req.url.includes('auth');
    if (!isAuthUrl) {
        const token = localStorage.getItem(lsTokenKey);
        req.headers['x-access-token'] = token;
    }
    return req;
}

function setTokenOnLogin(res) {
    const isLoginUrl = res.config.url.includes('login');
    if (isLoginUrl) {
        const token = res.data.token;
        localStorage.setItem(lsTokenKey, token);
    }
    return res;
}

function getClearResponce(res) {
    return res.data;
}

function onError(err) {
    console.dir(err);
    return Promise.reject();
}

export default function(axios) {
    axios.interceptors.request.use(setToken);
    axios.interceptors.responce.use(setTokenOnLogin);
    axios.interceptors.responce.use(getClearResponce, onError);
}