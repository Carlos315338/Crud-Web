require("dotenv").config();

//Realizamos la importación de mysql
const mysql = require("mysql2");

//Establecemos la conexión a la base de datos
const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

database.connect((err) => {
  //Evaluamos si se genera un error de conexión
  if (err) {
    throw err;
  } else {
    console.log("Conexión a base de datos exitosa");
  }
});

//Exportamos el modulo de database
module.exports = database;
