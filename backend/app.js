const express = require('express');//to build backend  quickly
const app = express();//license of expess
const cors = require('cors');//to corse orginal policy
const PORT = 8745

app.use(cors());

//db is linked to server
require('./db')
//end

app.listen(PORT,()=>(
    console.log(`server is running on port ${PORT}`)
));