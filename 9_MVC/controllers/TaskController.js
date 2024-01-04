const Task  = require("../models/Task")




module.exports = class TaskController{
    static createTask(req,res){
        res.render('tasks/create')
    }

    static async addTask(req,res){

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,
        }
        //validations
        //to process data
        await Task.create(task)
        
        res.redirect('/tasks')
    }

    static showTasks(req,res){
        const tasks = Task.findOne({raw: true, where: {id: 1}}) 
        console.log(tasks)
        res.render('tasks/all',{tasks})
    }
} 