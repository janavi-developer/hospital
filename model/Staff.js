const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    role: {
        type: String
    },
    email: {
        type: String
    },
    phone_no: {
        type: String
    },
    address: {
        type: String
    },
    salary: {
        type: Number
    },
    shift: {
        type: String
    },
    experience:{
        type:String,
    },
	consultation_fee:{
        type:String,
    }
});

module.exports = mongoose.model('Staff', staffSchema);
