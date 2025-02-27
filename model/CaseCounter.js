const mongoose = require('mongoose');

const caseCounterSchema = new mongoose.Schema({
 
    case_number: {
        type: String,
        required: true
    },
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date_opened: {
        type: Date,
        required: true
    },
    case_type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    totalCases:{
        type: String,
    },
    totalFee:{
        type:String
    },
    totalMoney:{
        type: String,
    }
});

module.exports = mongoose.model('CaseCounter', caseCounterSchema);
