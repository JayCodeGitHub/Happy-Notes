const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authControllers');

router.get('/', AuthController.getUser);
router.post('/register', AuthController.register);

module.exports = router;