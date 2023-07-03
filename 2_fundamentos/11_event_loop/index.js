function a(){
    console.log("executando a()")
    b()
}

function b(){
    console.log("executando b()")
}

function c(){
    console.log("executando c()")
    a()
    
}


c()
