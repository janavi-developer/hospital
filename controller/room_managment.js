const Room = require('../model/Room');
const Billing = require('../model/Billing');
const MedicalCharge = require('../model/MedicalCharge');
// const Patient = require('../model/Patient');


exports.createRoom = async (req, res) => {
    try {
        const newRoom = new Room(req.body);

        // Save the room to the database
        await newRoom.save();

        // Return the saved document
        res.status(201).json({
            status: 'Success',
            message: 'Room created successfully',
            data: newRoom  // Return the saved room document
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
        const newBilling = new Billing(req.boby);

        await newBilling.save();
        res.status(201).json({
            status: 'Success',
            message: 'Billing record created successfully'
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
        // Destructure the fields from the request body
        const { patient_id, medicine_id, quantity, price, prescribed_date } = req.body;

        // Calculate the total price based on quantity and price
        const total_price = quantity * price;

        // Create the new medical charge with the calculated total_price
        const newMedicalCharge = new MedicalCharge({
            patient_id,
            medicine_id,
            quantity,
            price,
            total_price,  // Automatically calculated total price
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

