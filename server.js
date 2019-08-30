const express=require('express')
const app=express()
const SERVER_PORT= process.env.PORT||3456
app.use(express.static('public'))
app.listen(SERVER_PORT)