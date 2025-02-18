const Room = require('../model/Room');
const Billing = require('../model/Billing');
const MedicalCharge = require('../model/MedicalCharge');



exports.createRoom = async (req, res) => {
    try {
        const newRoom = new Room(req.body);

      
        await newRoom.save();

        res.status(201).json({
            status: 'Success',
            message: 'Room created successfully',
            data: newRoom  
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.createBilling = async (req, res) => {
    try {
        const newBilling = new Billing(req.body);

        await newBilling.save();
        res.status(201).json({
            status: 'Success',
            message: 'Billing record created successfully',
            data: newBilling
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.createMedicalCharge = async (req, res) => {
    try {
     
        const { patient_id, medicine_id, quantity, price, prescribed_date } = req.body;

        
        const total_price = quantity * price;

       
        const newMedicalCharge = new MedicalCharge({
            patient_id,
            medicine_id,
            quantity,
            price,
            total_price, 
            prescribed_date
        });

        await newMedicalCharge.save();

        res.status(201).json({
            status: 'Success',
            message: 'Medical charge created successfully'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

