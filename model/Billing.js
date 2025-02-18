const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    room_charge: {
        type: Number
    },
    doctor_fee: {
        type: Number
    },
    medicine_charge: {
        type: Number
    },
    total_amount: {
        type: Number
    },
    paid_amount: {
        type: Number
    },
    remaining_balance: {
        type: Number
    },
    status: {
        type: String,
        enum: ['pending', 'partially paid', 'paid']
       
    },
    payment_date: {
        type: Date
    }
});

module.exports = mongoose.model('Billing', billingSchema);
