import axios from 'axios';

// axios.interceptors.request.use((config) => {
//     config.headers.Authorization =  'Bearer ' + API_TOKEN;
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

export const BASE_URL = process.env.VUE_APP_API_URL;;

export const get = (url:string, params:object = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const post = (url:string, data:object) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const _delete = (url:string) => {
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const put = (url:string, data:object) => {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const patch = (url:string, data:object) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export  const postFormData = (url:string, data:any) => {
    var form_data = new FormData();
    var files = data['file_object'] ? data['file_object'].files : [];

    for(var i = 0; i < files.length; i++){
        form_data.append("file", files[i]);
    }

    for(var d in data) {
        if(d !== 'file_object')
            form_data.append(d, data[d]);
    }

    return axios.post(url, form_data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export default {
    get,
    post,
    delete: _delete,
    put,
    patch,
    postFormData
}