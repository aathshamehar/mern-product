const mongoose = require('mongoose');

//for establishing connection between db and server
mongoose.connect('mongodb+srv://aathsha:aathsha@cluster0.sposqme.mongodb.net/product')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log(err)
    })
//connection established