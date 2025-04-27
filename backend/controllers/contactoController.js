const database = require("../database");

// Obtener todos los contactos
exports.obtenerContactos = (req, res) => {
  database.query("SELECT * FROM contactos", (err, resultados) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener contactos" });
    }
    res.json(resultados); // Retorna la lista de contactos en formato JSON
  });
};

// Crear un nuevo contacto
exports.crearContacto = (req, res) => {
  const {
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    email,
    telefono,
  } = req.body;

  // Validar campos obligatorios
  if (!primerNombre || !primerApellido || !email || !telefono) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  database.query(
    "INSERT INTO contactos (primerNombre, segundoNombre, primerApellido, segundoApellido, email, telefono) VALUES (?,?,?,?,?,?)",
    [
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      email,
      telefono,
    ],
    (err, resultado) => {
      if (err) {
        return res.status(500).json({ error: "Error al crear el contacto" });
      }
      res.json({ mensaje: "Contacto creado", id: resultado.insertId });
    }
  );
};

// Actualizar un contacto existente
exports.actualizarContacto = (req, res) => {
  const { id } = req.params;
  const {
    primerNombre,                                                                                               
    segundoNombre,
    primerApellido,
    segundoApellido,
    email,
    telefono,
  } = req.body;                                                                                                                                                               
                                                                                                                                    
                                                                                                                                                                                                                          
  database.query(
    "UPDATE contactos SET primerNombre = ?, segundoNombre = ?, primerApellido = ?, segundoApellido = ?, email = ?, telefono = ? WHERE id = ?",
    [
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      email,
      telefono,
      id,
    ],
    (err) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Error al actualizar el contacto" });
      }
      res.json({ mensaje: "Contacto actualizado" });
    }
  );
};

// Eliminar un contacto
exports.eliminarContacto = (req, res) => {
  const { id } = req.params;

  database.query("DELETE FROM contactos WHERE id = ?", [id], (err) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar el contacto" });
    }
    res.json({ mensaje: "Contacto eliminado" });
  });
};
