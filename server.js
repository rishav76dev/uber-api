import http from "http";
import app from "./app.js";
import dotenv from "dotenv";


const port = process.env.PORT || 5001;

const server = http.createServer(app);

server.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})