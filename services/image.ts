import req from "../utils/requestHelp";
import conf from "../utils/config";
import Image from "../api/image";

const FormData = require('form-data');
const fs = require('fs');

let imgD: any;
fs.readFile('./assets/b.jpg', function (err: Error, data: ImageData) {
    if (err) {
        console.log(err)
    } else {
        imgD = data
    }
})

class ImageService {
    constructor() {
    }

    async requestImage(params: any) {
        const form = new FormData()
        form.append('image_file', imgD)

        try {
            const res = await req.post(`${conf.getConfig().base['url']}remove-text/v1`, form)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
}

const imgSer = new ImageService()

export default imgSer
