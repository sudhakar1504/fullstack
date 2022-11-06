import express from "express";

const App = express()
App.use(express.json());


App.get("/",(req,res)=>{
res.json("response here")
})

App.listen(3030,()=>{
    console.log('backend connected');
})