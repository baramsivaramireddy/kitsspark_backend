const router = require("express").Router();
const path = require('path');
const topicController = require(path.resolve(CONTROLLER_DIR, 'topic'));
const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'));
router.get("/" ,topicController.search );
router.post("/" , topicController.create);
router.put('/:id' , topicController.update);
router.get('/:id',topicController.find);
router.delete("/:id" ,topicController.delete);
module.exports = router;