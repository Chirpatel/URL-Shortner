const mongoose = require('mongoose');
const db  = process.env.mongoURI

const connectDB = async ()=>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('Mongoose Connected...');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;