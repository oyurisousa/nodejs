const express = require("express");
const exphbs  = require('express-handlebars');
const port = 3000;
const app = express();

// engine handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const user = {
    name: "yuri",
    age: 18
}

app.get('/', (req, res) => {
    res.render('home',{user:user} );
});

app.listen(port, () => console.log("rodando"));
