const express = require("express")
const router = express.Router()
const ToughtController = require("../controllers/ToughtController")
const checkAuth = require("../helpers/auth").checkAuth

router.post("/add",ToughtController.add)
router.get("/add", checkAuth, ToughtController.viewAdd)
router.get("/dashboard", checkAuth, ToughtController.dashboard)
router.get("/", ToughtController.showToughts)

module.exports = router