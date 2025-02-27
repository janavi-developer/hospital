const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    room_charge: {
        type: Number,
        required: true
    },
    doctor_fee: {
        type: Number,
        required: true
    },
    medicine_charge: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    paid_amount: {
        type: Number,
        required: true
    },
    remaining_balance: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'partially paid', 'paid'],
        required: true
    },
    payment_date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Billing', billingSchema);
