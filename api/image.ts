import express from "express";
import imgSer from "../services/image";
import recogn from "../services/recognition";

const router = express.Router()

// ai生成文章及问答
router.get('/image/ai', (req, res) => {
    imgSer.requestImage({})
})

router.get('/image/reco', async (req, res) => {
    console.log('rrrrr', (await recogn.sendFile()).data)
    res.send(recogn.sendFile())
})

export default router