const server = require('express')

//routing by express

const myServer=server()

myServer.get("/",(req , res)=>{
    res.send("this is my default server")
})

myServer.listen(4000 ,()=>{
    console.log("welcome");
    
})