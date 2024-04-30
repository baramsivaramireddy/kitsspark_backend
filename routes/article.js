const router = require("express").Router();
const path = require('path');
const articleController = require(path.resolve(CONTROLLER_DIR, 'article'));
const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'))
router.get("/" ,articleController.search );
router.post("/" , articleController.create);
router.put('/:id' , articleController.update);
router.get('/:id',articleController.find);
router.delete("/:id" ,articleController.delete);
module.exports = router;
