const Task  = require("../models/Task")

module.exports = class TaskController{
    static viewAddTask(req,res){
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

    static async showTasks(req,res){
        const tasks = await Task.findAll({raw: true, order: [['done', 'ASC'],['updatedAt', 'DESC']]}) 
        
        res.render('tasks/all',{tasks})
    }

    static async viewUpdateTask(req,res){
        const id = req.params.id
        const task = await Task.findOne({raw:true,where: {id}})
        console.log(task)
        res.render(`tasks/update`, {task})
    }

    static async updateTask(req,res){
        const id = req.params.id
        const task = {
            title: req.body.title,
            description: req.body.description
        }
        await Task.update(task,{where: {id}})
        res.redirect('/tasks')
    }

    static async updateStatusTask(req,res){
        const id  = req.params.id
        
        const task = {
            done: req.body.done == "0" ? true : false
        }
        await Task.update(task, {where: {id}})
        
        res.redirect("/tasks")
        
    }
    static async removeTask(req,res){
        const id = req.params.id
        const task = await Task.findOne({raw: true, where:{id:id}}) 
        await Task.destroy({where: {id}})
        res.redirect("/tasks")
    }
} 