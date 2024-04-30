const router = require("express").Router();
const path = require('path');
const userController = require(path.resolve(CONTROLLER_DIR, 'user'));
const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'))
router.get("/",authenticationMiddleware, authorizationMiddleware(['admin']) , userController.search);
router.post('/login',   userController.login);
router.get('/:id', authenticationMiddleware ,userController.find);
module.exports = router;
