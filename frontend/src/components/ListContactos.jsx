import React, { useState, useEffect } from "react";
import axios from "axios";

// URL base del backend
const API = "http://localhost:3001/api/contacto";

// Componente principal
function ListarContactos() {
  // Estado para guardar los contactos
  const [contactos, setContacto] = useState([]);
  // Estado para el formulario (contactos)
  const [formulario, setFormulario] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
    telefono: "",
  });
  // Estado para saber si estamos editando y cuál contacto
  const [idEditar, setIdEditar] = useState(null);

  // Función para obtener todos los contactos desde el backend
  const obtenerContactos = async () => {
    const respuesta = await axios.get(API);
    setContacto(respuesta.data);
  };

  // Se ejecuta al cargar el componente
  useEffect(() => {
    obtenerContactos();
  }, []);

  // Maneja los cambios en los inputs del formulario
  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  // Envía el formulario: crea o actualiza un contacto
  const manejarEnvioFormulario = async () => {
    try {
      if (idEditar) {
        // Actualizar usuario existente
        await axios.put(`${API}/${idEditar}`, formulario);
      } else {
        // Crear nuevo usuario
        await axios.post(API, formulario);
      }
      setFormulario({
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        email: "",
        telefono: "",
      });
      setIdEditar(null);
      obtenerContactos();
    } catch (error) {
      console.error("Ocurrió un error:", error);
      alert("Hubo un problema al procesar la solicitud. Inténtalo nuevamente.");
    }
  };

  // Cargar datos del usuario al formulario para editar
  const manejarEdicion = (contacto) => {
    setFormulario({
      primerNombre: contacto.primerNombre,
      segundoNombre: contacto.segundoNombre,
      primerApellido: contacto.primerApellido,
      segundoApellido: contacto.segundoApellido,
      email: contacto.email,
      telefono: contacto.telefono,
    });
    setIdEditar(contacto.id);
  };

  // Eliminar un usuario
  const manejarEliminacion = async (id) => {
    await axios.delete(`${API}/${id}`);
    obtenerContactos();
  };

  return (
    <div className="row">
      {/* Formulario */}
      <div className="col-12 display-1 d-flex justify-content-center align-items-center py-4">
        <h2
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#453756",
          }}
        >
          Gestión de Contactos - CRUD
        </h2>
      </div>

      <div className="row">
        <div className="col-6">
          <label className="form-label" htmlFor="">
            Primer nombre
          </label>
          <input
            className="form-control form-control-sm mb-3"
            name="primerNombre"
            value={formulario.primerNombre}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="">
            Segundo nombre
          </label>
          <input
            className="form-control form-control-sm mb-3"
            name="segundoNombre"
            value={formulario.segundoNombre}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="">
            Primer apellido
          </label>
          <input
            className="form-control form-control-sm mb-3"
            name="primerApellido"
            value={formulario.primerApellido}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="">
            Segundo apellido
          </label>
          <input
            className="form-control form-control-sm mb-3"
            name="segundoApellido"
            value={formulario.segundoApellido}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            className="form-control form-control-sm mb-3"
            name="email"
            value={formulario.email}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="">
            Teléfono
          </label>
          <input
            className="form-control form-control-sm mb-3"
            name="telefono"
            value={formulario.telefono}
            onChange={manejarCambio}
          />
        </div>
      </div>

      <button className="btn btn-success" onClick={manejarEnvioFormulario}>
        {idEditar ? "Actualizar" : "Crear"}
      </button>

      <div className="table-response pt-5">
        <table className="table table-striped table-hover table-sm table-bordered">
          <caption>Lista de contactos</caption>
          <thead className="text-center">
            <tr className="table-dark">
              <th>Acción</th>
              <th>Primer Nombre</th>
              <th>Segundo Nombre</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {contactos.map((contacto) => (
              <tr key={contacto.id}>
                <td>
                  <button
                    className="btn btn-warning m-1"
                    onClick={() => manejarEdicion(contacto)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => manejarEliminacion(contacto.id)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>{contacto.primerNombre}</td>
                <td>{contacto.segundoNombre}</td>
                <td>{contacto.primerApellido}</td>
                <td>{contacto.segundoApellido}</td>
                <td>{contacto.email}</td>
                <td>{contacto.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarContactos;
