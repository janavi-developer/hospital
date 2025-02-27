const mongoose = require('mongoose');

const patientCountSchema = new mongoose.Schema({
   
    patient_name: {
        type: String,
        required: true
    },
    visit_date: {
        type: Date,
        required: true
    },
    visit_reason: {
        type: String,
        required: true
    },
    doctor_assigned: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PatientCount', patientCountSchema);
