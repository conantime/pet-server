 import express, {Application, Request, Response, NextFunction} from "express";

import Api from './api'

const app: Application = express()

app.use('/', Api.Image)

app.listen(3000, function () {
    console.log('listen to 3000')
})
