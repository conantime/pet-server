import req from "../utils/requestHelp";
import conf from "../utils/config";
import {getAccessToken} from "../utils/token";

const fs = require('fs');
const path = require('path')


class Recognition {
    constructor() {
    }

    async sendFile() {

        const token = await getAccessToken()

        const request_url = `https://aip.baidubce.com/rest/2.0/image-classify/v1/animal?access_token=?access_token=${token}`

        const base64 = fs.readFileSync(path.join(__dirname, '../', '/assets/20.jpg'), 'base64')

        const params = {"image": base64, "top_num": 6}


        try {
            const res = await req.post(request_url, params, {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
            return res
        } catch (e) {
            console.log(e)
        }
    }

}

const recogn = new Recognition()

export default recogn