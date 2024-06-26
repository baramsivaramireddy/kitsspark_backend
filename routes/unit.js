const router = require("express").Router();
const path = require('path');
const unitController = require(path.resolve(CONTROLLER_DIR, 'unit'));
const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'));
router.get("/" ,unitController.search );
router.post("/" , unitController.create);
router.put('/:id' , unitController.update);
router.get('/:id',unitController.find);
router.delete("/:id" ,unitController.delete);
module.exports = router;
