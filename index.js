import express from "express";

const App = express()
App.use(express.json());
const port = 3000

App.get("/",(req,res)=>{
res.json("response here")
})

App.listen(process.env.PORT || port,()=>{
    console.log('backend connected');
})