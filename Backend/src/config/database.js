const mongoose = require('mongoose')
const dns = require('dns')

// Force use of Google Public DNS to resolve SRV records
dns.setServers(['8.8.8.8', '8.8.4.4'])

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connected to DB');
    }).catch((err)=>{
        console.error('Failed to connect to MongoDB:', err.message);
    })
}
module.exports = connectToDB