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
    
        const { case_number, patient_id, department, date_opened, case_type,status, totalCases,totalfee} = req.body;
        
 const totalMoney = totalCases * totalfee;

     
        const newCaseCounter = new CaseCounter({
            case_number,
            patient_id,
            department,
            date_opened,
            case_type,  
            status,
            totalCases,
            totalfee,
            totalMoney

        });

        await newCaseCounter.save();
        res.status(201).json({
            status: 'Success',
            message: 'Case Counter created successfully'
        });
    } catch (error) {
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

exports.getdata = async (req,res) =>{
    var data = await PatientCount.find()

    res.status(200).json({
        status:"data fetch success...",
        data
    })
}