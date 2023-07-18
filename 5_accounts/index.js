import inquirer from 'inquirer'
import chalk from 'chalk'
operation()

function operation(){
    inquirer.prompt([{
        type:"list",
        name: "action",
        message:"O que você deseja fazer?",
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }]).then((answer)=>{
      const action = answer['action']
      if(action === 'Criar conta'){
        create_account()
      }
    }).catch((err)=>{console.log(err)})
}

function create_account(){
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"))
    console.log(chalk.green("defina as opções da sua conta a seguir:"))
}