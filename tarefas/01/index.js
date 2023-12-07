const {soma} = require("./soma.js")
const args = process.argv;
const [a,b] = [parseInt(args[2]),parseInt(args[3])]
console.log(soma(a,b))