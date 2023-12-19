const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        
    },
    link: {
        type: String
       
        
    }
},
    { timestamps: true },
);

const Notification = mongoose.model('NOTIFICATION', notificationSchema);

module.exports = Notification;