// Importación de modulos necesarios
const express = require("express");
const cors = require("cors");
const database = require("./database");

//Creación de la aplicación express
const app = express();

// Habilita la comunicación entre diferentes dominios al permitir solicitudes cruzadas.
// Esto evita problemas de restricciones por seguridad, como conflictos entre puertos al conectar frontend y backend.
app.use(cors());

//Encargado de procesar datos JSON en solicitudes HTTP
app.use(express.json());

//Configuración del puerto de servidor backend
const PORT = 3001;

// Todas las solicitudes que lleguen a "/api/usuario" serán redirigidas al archivo correspondiente en "routes/usuario".
app.use("/api/contacto", require("./routes/contacto"));

// Inicia el servidor y escucha en el puerto especificado.
// Muestra en la consola un mensaje con el enlace donde el servidor está corriendo, útil para pruebas y desarrollo local.
app.listen(PORT, () => {
  console.log(`Servidor backend ejecutandose... http://localhost:${PORT}`);
});
