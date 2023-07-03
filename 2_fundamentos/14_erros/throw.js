var x = "10"

if(!Number.isInteger(x)){
    throw new Error(`${x} não é um número!`)
}