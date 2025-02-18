
const express = require('express');
const router = express.Router();


const reception_staff = require('../controller/reception_staff');
const room_managment = require('../controller/room_managment')

router.get('/',reception_staff.getdata);

router.post('/createStaff', reception_staff.createStaff);

router.post('/createCaseCounter', reception_staff.createCaseCounter);

router.post('/patient-count',reception_staff.createPatientCount);

router.post('/rooms', room_managment.createRoom);

router.post('/billing', room_managment.createBilling);

router.post('/medical-charge', room_managment.createMedicalCharge);


module.exports = router;
