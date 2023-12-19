const mongoose = require('mongoose');


const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log('db Connect successfully');
}).catch((err) =>{
    console.log('db connection failed');
});