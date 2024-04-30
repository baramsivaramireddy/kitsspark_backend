

const router = require("express").Router()
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const path = require('path')
const uploadController = require(path.resolve(CONTROLLER_DIR,'upload'));
const { authenticationMiddleware, authorizationMiddleware } = require(path.resolve(MIDDLEWARE, 'auth'));
router.post('/' ,upload.single('file') ,uploadController.upload )

module.exports=router