📚 Proyecto CRUD de Contactos
📋 Descripción

Este proyecto es una aplicación web de tipo CRUD (Crear, Leer, Actualizar y Eliminar) de contactos.
Está construida usando React JSX para el frontend, Node.js y Express para el backend, y MySQL como base de datos.

🚀 Tecnologías Utilizadas

    Frontend:
        React
        Axios
        HTML5, CSS3, JavaScript (ES6+)
    Backend:
        Node.js
        Express.js
        MySQL
        Cors y dotenv

Configuración del Backend

1. Crea la base de datos:

   CREATE DATABASE crud_database;

   USE crud_database;

   CREATE TABLE contactos (
   id INT AUTO_INCREMENT PRIMARY KEY,
   primerNombre VARCHAR(50) NOT NULL,
   segundoNombre VARCHAR(50),
   primerApellido VARCHAR(50) NOT NULL,
   segundoApellido VARCHAR(50),
   email VARCHAR(100) NOT NULL,
   telefono VARCHAR(12) NOT NULL
   );

2. Entra en la carpeta backend:
   cd backend

3. Instala las dependencias:
   npm install

4. Configura el archivo .env:

   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=nombre_de_tu_base_de_datos
   PORT=3001

5. Inicia el servidor backend:
   node index.js

(Asegúrate de tener MySQL corriendo y la base de datos creada)

Configuración del Frontend

1. Entra en la carpeta frontend:
   cd frontend

2. Instala las dependencias:
   npm install

3. Inicia el servidor frontend:
   npm run dev

🔥 Características

    Crear un nuevo contacto.

    Visualizar la lista de contactos.

    Editar la información de un contacto existente.

    Eliminar un contacto.

    Comunicación entre frontend y backend vía API RESTful.

✅ Requisitos Previos

    Node.js (v16 o superior recomendado)

    npm o yarn

    MySQL

    Un editor de código (como VSCode)

    👨‍💻 Autor

    Carlos Viveros
