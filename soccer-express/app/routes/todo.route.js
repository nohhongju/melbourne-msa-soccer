const express = require('express');
const todoRouter = express.Router()

todoRouter.use(function log(req,res,next){
    console.log(' ### todo 서버 ### ');
    next();
})
module.exports = todoRouter;