const express = require('express');//to build backend  quickly
const app = express();//license of expess
const cors = require('cors');//to corse orginal policy
const PORT = 8745

app.use(cors());


app.use(express.json()); //! to parse json data
app.use(express.urlencoded({extended:true})); //! to parse url encoded data
app.use(express.static('public')); //! to serve static files

//db is linked to server
require('./db')
const PRODUCT = require('./model/product')

//end

app.post('/product',async (req, res) =>{
    try {
        console.log(req.body);
        let item = req.body;

        const saveItem = PRODUCT(item);
        await saveItem.save();
        console.log("successsssssss")
        res.send("Success!");

    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})



app.listen(PORT,()=>(
    console.log(`server is running on port ${PORT}`)
));