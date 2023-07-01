import inquirer from "inquirer"
inquirer.prompt([
    {
        name : 'p1', 
        message: "primeira nota: ", 
    },
    {
        name: 'p2',
        message: 'segunda nota ? ',
    }
]).then((msg)=>{
    var media = (parseInt(msg['p1'])+parseInt(msg['p2'])) / 2
    console.log(media)
}).catch((err)=>{
    console.log(err)
})