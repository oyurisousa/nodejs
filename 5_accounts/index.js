import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

operation()

function operation(){
    inquirer.prompt([{
        type:"list",
        name: "action",
        message:"O que você deseja fazer?",
        choices: [
            'Criar conta',
            'Depositar',
            'Consultar saldo',
            'Sacar',
            'Sair'
        ]
    }]).then((answer)=>{
      const action = answer['action']
      if(action === 'Criar conta'){
        create_account()
      }else if(action === "Depositar"){
        deposit()
      }else if(action === "Consultar saldo"){
        consult_amount()
      }else if(action === "Sacar"){
        
      }else if(action === "Sair"){
        console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"))
        process.exit()
      }
    }).catch((err)=>{console.log(err)})
}

function create_account(){
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"))
    console.log(chalk.green("defina as opções da sua conta a seguir:"))
    build_account()
}

function build_account(){
  inquirer.prompt([{
    name: 'account_name',
    message: "Digite o nome para sua conta: "
  }])
  .then((answer)=>{
    const account_name = answer['account_name']
    if(!fs.existsSync('accounts')){
      fs.mkdirSync('accounts')
    }
    if(check_account(account_name)){
      console.log(chalk.bgRed.black("Essa conta já existe!"))
      build_account()
      return
    }else{
      fs.writeFileSync(`accounts/${account_name}.json`,'{"balance":0}',(err)=>console.log(err))
      console.log(chalk.bgGreen.black("parabéns "+account_name+", sua conta foi criada com sucesso"))
      operation()
    }
    
   
  })
  .catch((err)=>console.log(err))
}

function deposit(){
  inquirer.prompt([
    {
      name: "account_name",
      message: "Qual o nome da sua conta?"      
    }
  ])
  .then((answer)=>{
    const account_name = answer['account_name']
    if(!check_account(account_name)){
      return deposit()
    }

    inquirer.prompt([
      {
        name : "amount",
        message : "Valor do depósito:" 
      }
    ]).then((answer)=>{
      const amount = answer['amount']
      //add amount
      add_amount(account_name,amount)
      
    }).catch(err => console.log(err))
  })
  .catch((err)=>{console.log(err)})
}

function check_account(account_name){
  if(!fs.existsSync(`accounts/${account_name}.json`)){
    console.log(chalk.bgRed.black("essa conta não existe, escolha outro nome"))
    return false
  }
  return true
}

function add_amount(account_name, amount){
  const account = get_account(account_name)
  if(!amount){
    console.log(chalk.bgRed.black("Ocorreu um erro!"))
    return deposit()
  }
  account.balance = parseFloat(amount) + parseFloat(account.balance)

  fs.writeFileSync(`accounts/${account_name}.json`, JSON.stringify(account),err=>console.log(err))
  console.log(chalk.green(`foi despositado R$${amount} na sua conta`))
  return operation()
}

function get_account(account_name){
  const account_json = fs.readFileSync(`accounts/${account_name}.json`,{
    encoding: 'utf-8',
    flag: 'r'
  })

  return JSON.parse(account_json)
}


function consult_amount(){
  inquirer.prompt([
    {
      name: "account_name",
      message: "Digite o nome da sua conta?"
    }
  ]).then((answer)=>{
    const account_name = answer['account_name']
    if(!check_account(account_name)){
      return consult_amount()
    }
    const account = get_account(account_name)
    console.log(chalk.bgBlue.black(`Saldo: R$${account.balance}`))
    return operation()
  }).catch(err=>{console.log(err)})
  
}