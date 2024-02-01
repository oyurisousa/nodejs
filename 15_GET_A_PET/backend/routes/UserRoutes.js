const express = require("express")
const router = express.Router()

const UserController = require("../controller/UserController")
const verifyToken = require("../helpers/verity-token")

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
router.get('/:id', UserController.getUserById)
router.patch('/edit/:id',verifyToken, UserController.editUser)

module.exports = router