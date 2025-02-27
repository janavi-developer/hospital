const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    experience:{
        type:String,
    },
	consultation_fee:{
        type:String,
    }
});

module.exports = mongoose.model('Staff', staffSchema);
