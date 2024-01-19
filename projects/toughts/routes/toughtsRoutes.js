const express = require("express")
const router = express.Router()
const ToughtController = require("../controllers/ToughtController")
const checkAuth = require("../helpers/auth").checkAuth

router.post("/remove", checkAuth, ToughtController.remove)
router.get("/edit/:id", checkAuth, ToughtController.viewUpdate)
router.post("/edit/", checkAuth, ToughtController.update)
router.get("/add", checkAuth, ToughtController.viewAdd)
router.post("/add",checkAuth ,ToughtController.add)
router.get("/dashboard", checkAuth, ToughtController.dashboard)
router.get("/", ToughtController.showToughts)

module.exports = router