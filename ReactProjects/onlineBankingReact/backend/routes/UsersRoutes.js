const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/validate', userController.validateUser);//http://localhost:5000/api/v1/users

module.exports = router;

// MVC ->  model(data send/recieve) view(route) controller(logic)

