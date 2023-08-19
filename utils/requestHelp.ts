import {AxiosResponse} from "axios";

const axios = require('axios')

const req = {
    get: (link: string, data: Object) => {
    },

    post: (link: string, data: any, headers: any = {}) => {
        console.log(data)
        console.log(link)
        const options = {
            headers: {
                ...headers
            }
        }
        return axios.post(link, data, options)

    }
}

export default req