const request = require('request');

const req = {
    get: (link: string, data: Object) => {

    },

    post: (link: string, data: any, headers: any = {}) => {
        return request({
            url: link,
            method: 'POST',
            headers: {
                "content-type": "multipart/form-data",
                ...headers
            },
            body: data
        })
    }
}

export default req