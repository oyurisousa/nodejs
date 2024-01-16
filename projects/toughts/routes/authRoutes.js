const express = require("express")
const AuthController = require("../controllers/AuthController")
const router = express.Router()

router.get("/login",AuthController.viewLogin)
router.post("/login",AuthController.login)
router.get("/register",AuthController.viewRegister)
router.post("/register",AuthController.register)
router.get("/logout",AuthController.logout)


module.exports = router