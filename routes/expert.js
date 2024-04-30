const router = require("express").Router();
const path = require('path');
const expertController = require(path.resolve(CONTROLLER_DIR, 'expert'));

const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'));
router.get("/" ,expertController.search );
router.post("/" , expertController.create);
router.put('/:id' , expertController.update);
router.get('/:id',expertController.find);
router.delete("/:id" ,expertController.delete);

module.exports = router;
