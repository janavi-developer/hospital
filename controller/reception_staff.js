const Staff = require('../model/Staff');
const CaseCounter = require('../model/CaseCounter');
const PatientCount = require('../model/PatientCount');


exports.createStaff = async (req, res) => {
    try {
        const newStaff = new Staff(req.body);

        await newStaff.save();
        res.status(201).json({
            status: 'Success',
            message: 'Staff created successfully'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};
exports.createCaseCounter = async (req, res) => {
    try {
        // Destructure the relevant fields from the request body
        const {case_number,patient_id, department,date_opened,case_type,status,totalCases, totalFee } = req.body;

        // Calculate the total money
        const totalMoney = totalCases * totalFee;
    
        // Create a new CaseCounter instance using the updated request body
         const newCaseCounter = new CaseCounter({
                    case_number,
                    patient_id,
                    department,
                    date_opened,
                    case_type,
                    status,  // Automatically calculated total price
                    totalCases,
                    totalFee,
                    totalMoney
                });

        // Save the new case counter to the database
        await newCaseCounter.save();

        // Send success response
        res.status(201).json({
            status: 'Success',
            message: 'Case Counter created successfully'
        });
    } catch (error) {
        // Send error response if something goes wrong
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};


exports.createPatientCount = async (req, res) => {
    try {
        const newPatientCount = new PatientCount(req.body);

        await newPatientCount.save();
        res.status(201).json({
            status: 'Success',
            message: 'Patient Count created successfully'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};



// exports.createCaseCounter = async (req, res) => {
//     try {
//         const newCaseCounter = new CaseCounter(req.body);

   
//        var totalMoney = totalCases * totalfee;
//         await newCaseCounter.save();
//         res.status(201).json({
//             status: 'Success',
//             message: 'Case Counter created successfully'
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: 'Fail',
//             message: error.message
//         });
//     }
// };
 // Assuming the model is in 'models' directory

// exports.createCaseCounter = async (req, res) => {
//     try {
//         // Create a new CaseCounter instance from the request body
//         const newCaseCounter = new CaseCounter(req.body);

//         // Save the new CaseCounter instance to the database
//         await newCaseCounter.save();

//         // Get today's date range (start and end of the day)
//         const startOfDay = new Date();
//         startOfDay.setHours(0, 0, 0, 0); // Set to 00:00 (midnight)
//         const endOfDay = new Date();
//         endOfDay.setHours(23, 59, 59, 999); // Set to 23:59:59.999 (one millisecond before midnight)

//         // Fetch all records from the database (this can be costly for large datasets)
//         const allRecords = await CaseCounter.find();

//         // Initialize variables for total cases and total money
//         let totalCases = 0;
//         let totalMoney = 0;

//         // Loop through all the records and manually filter for today's records
//         for (const record of allRecords) {
//             // If the record was created today, add it to the totals
//             if (record.createdAt >= startOfDay && record.createdAt <= endOfDay) {
//                 totalCases += 1; // Count the case
//                 totalMoney += record.money; // Sum the money
//             }
//         }

//         // Send a success response with the total count for the day
//         res.status(201).json({
//             status: 'Success',
//             message: 'Case Counter created successfully',
//             totalCases: totalCases,
//             totalMoney: totalMoney
//         });
//     } catch (error) {
//         // Send a failure response if there is an error
//         res.status(400).json({
//             status: 'Fail',
//             message: error.message
//         });
//     }
// };