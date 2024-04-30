const router = require("express").Router();
const path = require('path');
const studentController = require(path.resolve(CONTROLLER_DIR, 'student'));



const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'));
router.get("/" ,studentController.search );
router.post("/" , studentController.create);
router.put('/:id' , studentController.update);
router.get('/:id',studentController.find);
router.delete("/:id" ,studentController.delete);

module.exports = router;
