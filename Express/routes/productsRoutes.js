const express = require('express');
const { adminLogin, createAdmin ,updateUserByAdmin} = require('../controller/adminController');
const router = express.Router();


router.post('/adminlogin', adminLogin);
router.post('/createadmin/:adminkey', createAdmin);
router.post("/update-user/:userId",updateUserByAdmin)



module.exports = router;