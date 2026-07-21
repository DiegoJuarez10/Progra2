// Importamos el modulo express 
const express = require("express"); //para levantar el programa
const bodyParser = require("body-parser"); //para que identifique los valores del json
const cors = require("cors"); //de que ip se puede conectar

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models"); //extraer todos los modelos

db.sequelize.sync();  
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "UMG Web Application" });
});

//require("./app/routes/tutorial.routes")(app); //importar todos los posibles datos
require("./app/routes/cliente.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});