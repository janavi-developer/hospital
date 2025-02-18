const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    room_number: {
        type: String
    },
    type: {
        type: String
    },
    bed_count: {
        type: Number
    },
    room_rate: {
        type: Number
    },
    patient_assigned: {
        type: String
    },
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    date_check_in: {
        type: Date
    },
    date_check_out: {
        type: Date
    },
    total_room_charge: {
        type: Number
    }
});


module.exports = mongoose.model('Room', roomSchema);
