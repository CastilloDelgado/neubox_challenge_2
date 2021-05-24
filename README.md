--------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------- NEUBOX CHALLENGE 2 ----------------------------------------------------

Esta aplicación está creada en Laravel en conjunto con Jetstream e Inertia para el manejo de las vistas con VUE Js

Sigue los siguientes pasos para ejecutar la aplicación de manera local:

1.- Para clonar el repositorio, ejecuta el siguiente comando "git clone https://github.com/CastilloDelgado/neubox_challenge_2.git"
2.- Una vez descargado el repositorio, procedemos con la instalación de las librerias de PHP Composer con el comentado "composer install"
3.- Una vez instaladas las librerias de  composer, ahora deberemos instalar las librerias de JS con NPM con el comando "npm install"
4.- Ya con el repositorio descargado y las librerias instaladas, procedemos a crear el archivo .ENV, podemos copiar el archivo .ENV.EXAMPLE
    y renombrarlo como .ENV, una vez creado este archivo deberemos hacer la conexión en la base de datos de nuestro ambiente local.
    El nombre de la base de datos por default es "emprend" pero puedes modificarla. También deberas agregar el usuario y contraseña de tu
    servidor de bases de datos local.
5.- Ejecutamos el comando "php artisan key:generate" para crear la llave de identificación del proyecto.
6.- Ya con la base de datos creada, deberemos crear las tablas de la aplicación con el comando "php artisan migrate --seed". Con este
    comando crearemos las bases de datos necesarios y las llenaremos con datos creados aleatoriamente por laravel faker.
    Este comando también creará un usuario por default para acceder a la aplicación con la siguiente información:
    username: i@admin.com
    password: 123456
7.- Por ultimo, ejecutamos "npm run watch" para poder compilar la libreria VUE y poder correr la aplicación en nuestro navegador de manera
    local.
 
