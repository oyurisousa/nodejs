const express = require("express")
const router = express.Router()

const TasksController = require("../controllers/TaskController")
router.post('/delete/:id', TasksController.removeTask)
router.post('/updateStatusTask/:id', TasksController.updateStatusTask)
router.post('/update/:id', TasksController.updateTask)
router.get('/update/:id', TasksController.viewUpdateTask)
router.get('/add', TasksController.viewAddTask)
router.post('/add', TasksController.addTask)
router.get("/", TasksController.showTasks)

module.exports = router