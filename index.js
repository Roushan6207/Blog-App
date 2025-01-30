const express=require("express");
const app=express();

app.listen(3000, () =>{
    console.log("App is going Good");
})

app.get("/",(req,res) => {
    console.log("This is HomePage baby");
    res.send(`<h1>welcome to HomePage</h1>`);
})