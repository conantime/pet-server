// # encoding:utf-8
// import base64
// import urllib.parse
// import urllib.request
//
// '''
// 动物识别
// '''
//
// request_url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/animal"
//
// # 二进制方式打开图片文件
// f = open('C:/Users/Alyfu/Desktop/f.png', 'rb')
// img = base64.b64encode(f.read())
//
// params = {"image":img,"top_num":6}
// params = urllib.parse.urlencode(params).encode(encoding='UTF8')
//
// access_token = '[调用鉴权接口获取的token]'
// request_url = request_url + "?access_token=" + access_token
// request = urllib.request.Request(url=request_url, data=params)
// request.add_header('Content-Type', 'application/x-www-form-urlencoded')
// response = urllib.request.urlopen(request)
// content = response.read()
// if content:
// print(bytes(content).decode('utf-8')
//

import req from "../utils/requestHelp";
import conf from "../utils/config";

const fs = require('fs');
const path = require('path')

const token = conf.getConfig().base['baidu-api-key']
const request_url = `${conf.getConfig().base['baidu-pet-api']}?access_token=${token}`

console.log(path.join(__dirname, '../', '/assets/test.jpg'))

const base64 = fs.readFileSync(path.join(__dirname, '../', '/assets/test.jpg'), 'base64')

class Recognition {
    constructor() {
    }

    async sendFile() {
        const params = {"image": base64, "top_num": 6}

        try {
            const res = await req.post(request_url, params, {'Content-Type': 'application/x-www-form-urlencoded'})
            // console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

}

const recogn = new Recognition()

export default recogn