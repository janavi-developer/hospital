// // var express = require('express');
// // var router = express.Router();

// // var user = require('../controller/UserController');

// // router.post('/insert',user.Insert);
// // router.get('/',user.Select);counter
// // router.get('/update/:id',user.get_update_data);
// // router.post('/update/:id',user.update);
// // router.get('/delete/:id',user.delete_data);
// // router.post('/login',user.login);
// // router.get('/logout',user.logout);

// // module.exports = router;
const express = require('express');
const router = express.Router();

// Import the controller functions
const reception_staff = require('../controller/reception_staff'); // Adjust the path if necessary
const room_managment = require('../controller/room_managment')

// Route for creating a new staff member
router.post('/createStaff', reception_staff.createStaff);

// Route for creating a new case counter
router.post('/createCaseCounter', reception_staff.createCaseCounter);

// Route for creating a new patient count (for visit tracking)
router.post('/patient-count',reception_staff.createPatientCount);

router.post('/rooms', room_managment.createRoom);

// Route for creating a new billing record
router.post('/billing', room_managment.createBilling);

// Route for creating a new medical charge
router.post('/medical_charge', room_managment.createMedicalCharge);


module.exports = router;
