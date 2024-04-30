const router = require("express").Router();
const path = require('path');
const teacherController = require(path.resolve(CONTROLLER_DIR, 'teacher'));




const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'));
router.get("/" ,teacherController.search );
router.post("/" , teacherController.create);
router.put('/:id' , teacherController.update);
router.get('/:id',teacherController.find);
router.delete("/:id" ,teacherController.delete);

module.exports = router;
