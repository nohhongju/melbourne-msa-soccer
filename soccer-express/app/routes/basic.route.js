const express = require('express');
const basicRouter = express.Router()

basicRouter.use(function log(req,res,next){
    console.log(' ### 관리자 서버 ### ');
    next();
})
module.exports = basicRouter;