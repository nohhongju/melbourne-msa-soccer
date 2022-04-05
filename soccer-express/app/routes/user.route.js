const express = require('express');
const userRouter = express.Router()

userRouter.use(function log(req,res,next){
  console.log(' ### user 서버 ### ');
  next();
})
userRouter.post("/sign-up",(req,res)=>{
  const {username, password, name, telephone} = req.body
  console.log(`넘어온 JSON 값 :  ${JSON.stringify(req.body)}`)
  res.json(req.body)
})

module.exports = userRouter;