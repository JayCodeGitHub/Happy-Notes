const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

router.get('/', UserController.getUser);

module.exports = router;