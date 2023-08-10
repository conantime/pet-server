import express from "express";

const router = express.Router()

// 默认文章
router.get('/article/index', (req, res) => {
    res.send('ok')
})

// ai生成文章及问答
router.get('/article/ai', (req, res) => {

})

export default router