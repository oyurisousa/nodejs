const express = require("express");
const exphbs  = require('express-handlebars');
const port = 3000;
const app = express();

// engine handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/dashboard',(req,res)=>{
    
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        name: "yuri",
        age: 18
    }
    const auth = false

    res.render('home',{user:user,auth} );
});

app.listen(port, () => console.log("rodando"));
