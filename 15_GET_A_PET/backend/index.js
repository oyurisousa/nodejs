const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");
const app = express();
const UserRoutes = require("./routes/UserRoutes");
const PetRoutes = require("./routes/PetsRoutes");

//config Json response
app.use(express.json());

//solve cors
// app.use(cors({
//     credentials:true,
//     origin: 'http://localhost:3000'
// }))
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);
//public folder for images
app.use(express.static("public"));

//routes
app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);
app.listen(5000);
