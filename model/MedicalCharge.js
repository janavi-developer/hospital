const mongoose = require('mongoose');

const medicalChargeSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    prescribed_date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('MedicalCharge', medicalChargeSchema);
