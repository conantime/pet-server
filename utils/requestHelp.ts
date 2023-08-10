const request = require('request');
const https = require('https');

const req = {
    get: (link: string, data: Object) => {
    },

    post: (link: string, data: any, headers: any = {}) => {
        const options = {
            method: 'POST',
            headers: {
                ...headers
            }
        }
        const req = https.request(link, options, (res: any) => {
            console.log(res)
        })

        req.on('error', (error:any) => {
            console.log(error)
        })

    }
}

export default req