const express = require("express");
const app = express();
const path = require("path");
// console.log(path);
app.use(express.static('public'));
app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));
})


const port = 3000
app.listen(3000, ()=>{ console.log("server is up")})