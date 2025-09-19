const mongoose = require('mongoose');


mongoose.connect('Add your own Connection URL').then((res)=>{
    console.log("Database Connected Successfully");
}).catch(err=>{
    console.log("Something Error",err);
})