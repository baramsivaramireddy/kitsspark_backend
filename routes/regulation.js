const router = require("express").Router();
const path = require('path');
const regulationController = require(path.resolve(CONTROLLER_DIR, 'regulation'));
const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'));
router.get("/" , authenticationMiddleware ,regulationController.search );
router.post("/" , authenticationMiddleware ,regulationController.create);
router.put('/:id' ,authenticationMiddleware, regulationController.update);
router.get('/:id', authenticationMiddleware,regulationController.find);
router.delete("/:id" ,authenticationMiddleware ,regulationController.delete);
module.exports = router;
