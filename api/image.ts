import express from "express";
import imgSer from "../services/image";

const router = express.Router()

// ai生成文章及问答
router.get('/image/ai', (req, res) => {
    imgSer.requestImage({})
})

export default router