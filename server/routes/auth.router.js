const router = require('express').Router();
const { authControllers } = require('../controllers');
const { authMiddleware } = require('../middleware');

router.post('/', authMiddleware.checkPasswordAndEmail, authControllers.loginUser);

module.exports = router
