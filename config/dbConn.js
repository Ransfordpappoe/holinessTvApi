const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE_URI);
    }catch(err){
        console.error(err);
    }
}

// const devotionDB = () =>{
//     try{
//       const conn1 =  mongoose.createConnection(process.env.DATABASE_URI_DEVO);
//         conn1.once('open', ()=>{
//             console.log("connected to the devotion database");
            
//         });
//       return conn1;
//     }catch(err){
//         console.error(err);
//     }
// }

// const audioBooksDB = () =>{
//     try{
//       const conn2 =  mongoose.createConnection(process.env.DATABASE_URI_AUDIOBOOK);
//       conn2.once('open', ()=>{
//         console.log("connected to the audio book database");
//     });
//       return conn2;
//     }catch(err){
//         console.error(err);
//     }
// }
module.exports = {
    connectDB
}