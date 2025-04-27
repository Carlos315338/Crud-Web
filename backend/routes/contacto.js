const express = require("express");
const router = express.Router();

// Importamos el controlador de usuarios
const contactoControlador = require("../controllers/contactoController");

// Ruta para obtener todos los contactos
router.get("/", contactoControlador.obtenerContactos);

// Ruta para crear un nuevo contacto
router.post("/", contactoControlador.crearContacto);

// Ruta para actualizar un contacto por su ID
router.put("/:id", contactoControlador.actualizarContacto);

// Ruta para eliminar un contacto por su ID
router.delete("/:id", contactoControlador.eliminarContacto);


// Exportamos las rutas para usarlas en la app principal
module.exports = router;
