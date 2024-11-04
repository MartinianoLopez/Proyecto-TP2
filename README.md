# Proyecto TP2:  Reseñas de Películas

# Descripción
Este proyecto es una aplicación de API REST para gestionar reseñas de películas. Está desarrollada en Node.js y utiliza Express para manejar las rutas, Sequelize para la interacción con la base de datos, y MySQL como sistema de gestión de bases de datos. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre películas y usuarios, permitiendo así que los usuarios puedan agregar reseñas de películas.

# Requisitos del Sistema
Para ejecutar este proyecto, necesitas tener instalados los siguientes componentes:

Node.js 
MySQL 
Sequelize 
Git 


# Instalación

1 - Clonar el repositorio

git clone https://github.com/MartinianoLopez/Proyecto-TP2.git
cd Proyecto-TP2

2 - Instalar dependencias

npm install


3 - Configurar la base de datos

Crea una base de datos en MySQL y configura las credenciales en el archivo .env.


4 - Configurar el entorno

Renombra el archivo .env.example a .env y completa la configuración necesaria:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_la_base_de_datos

5  -  jecutar migraciones y seeders

Configura las tablas y los datos de prueba en la base de datos:

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Uso

1 - Iniciar el servidor
npm start

El servidor se ejecutará en http://localhost:3000.

2 Probar la API

Se puede usar herramientas como Postman o Insomnia para realizar solicitudes a la API y probar sus endpoints.


# Estructura del Proyecto

La aplicación sigue la arquitectura MVC, donde el código se organiza en las carpetas:

models/: Define los modelos de Sequelize para las tablas Users y Movies.
controllers/: Contiene la lógica de cada controlador para manejar las solicitudes HTTP.
routes/: Define las rutas de la API y los endpoints para cada recurso.
middlewares/: Contiene los middlewares como autenticación y manejo de errores.
config/: Incluye archivos de configuración para Sequelize y la base de datos.


# Funciones Principales

La aplicación cuenta con las siguientes funcionalidades:

Usuarios

Crear un usuario
Leer información de un usuario
Actualizar información de un usuario
Eliminar un usuario

Películas

Crear una película
Leer información de una película
Actualizar información de una película
Eliminar una película

Reseñas

Un usuario puede crear una reseña para una película específica
Leer reseñas de una película
Actualizar una reseña (solo el autor de la reseña puede hacerlo)
Eliminar una reseña (solo el autor de la reseña puede hacerlo)


# Ejemplos de Endpoints


Usuarios

Crear Usuario

POST /users
Body: { "name": "Juan", "email": "juan@example.com" }
Obtener Usuarios

GET /users
Actualizar Usuario

PUT /users/:id
Body: { "name": "Juan Pérez" }
Eliminar Usuario

DELETE /users/:id
Películas
Crear Película

POST /movies
Body: { "title": "Inception", "genre": "Sci-Fi" }
Obtener Películas

GET /movies
Actualizar Película

PUT /movies/:id
Body: { "title": "Inception 2" }
Eliminar Película

DELETE /movies/:id
Reseñas
Crear Reseña

POST /movies/:movieId/reviews
Body: { "userId": 1, "review": "Amazing movie!", "rating": 5 }
Obtener Reseñas de una Película

GET /movies/:movieId/reviews
Actualizar Reseña

PUT /reviews/:id
Body: { "review": "Even better on a second watch.", "rating": 4 }
Eliminar Reseña

DELETE /reviews/:id

# Manejo de Errores

El sistema maneja errores a través de middlewares de Express. Los errores comunes incluyen:

404 Not Found: Para rutas no definidas.
400 Bad Request: Para errores de validación de entrada.
500 Internal Server Error: Para errores de servidor.