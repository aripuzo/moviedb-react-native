import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

api.interceptors.request.use(x => {

    const headers = {
        ...x.headers.common,
        ...x.headers[x.method],
        ...x.headers
    };

    ['common','get', 'post', 'head', 'put', 'patch', 'delete'].forEach(header => {
        delete headers[header]
    })

    const printable = `${new Date()} | Request: ${x.method.toUpperCase()} | ${x.url} | ${ JSON.stringify( x.data) } | ${ JSON.stringify(headers)}`
    console.log(printable)

    return x;
})


export default api;

export const configs = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  };