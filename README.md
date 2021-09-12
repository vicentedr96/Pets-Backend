
Instalación local
------------

* Instala Node.js la versión lts (https://nodejs.org/es/)
* Instala Postman (https://www.postman.com/downloads/)
* Instalar Mysql con algun gestor de base de datos (ejemplo, https://www.mysql.com/downloads/) 
* Instalar Visual Studio Code (https://code.visualstudio.com/)

Documentación
------------

* https://documenter.getpostman.com/view/9401113/U16kr5aq
* https://github.com/vicentedr96/Pets-Backend

Instrucciónes
------------

* Una vez descargado el proyecto, abra su consola cmd o powershell y diríjase a la ruta de proyecto(ejemplo, C:\Users\Vicente\Documents\Github\Pets\Pets-Backend) y coloque el comando "npm i" (sin comillas), esto instalara todos los paquetes necesarios al proyecto

* Después le recomendamos crear una nueva base de datos, ya sea mysql o postgres; obtenga los datos conexión estos son:
1.- Nombre de base de datos (ejemplo, pets)
2.- Usuario de base de datos (ejemplo, root)
3.- Contraseña  de base de datos (ejemplo, root)
4.- Host   (ejemplo, localhost)
5.- Puerto (ejemplo, 300, 3001, etc)
(No es necesario crear las tablas, el proyecto se encargara de ello, unicamente crear la base de datos)

* Una vez teniendo la información anterior, localiza la carpeta siguiente 
C:\ ... \Pets-Backend\src\Settings en la carpeta Setting encontraras un archivo index.js, 
en ella habrá variables de entorno, cambia las variables de entorno que tenga el nombre "LOCAL" con la información que obtuviste  en el paso anterior, modifica dentro de las comillas simples 
(ejemplo, process.env.DATABASE_HOST_LOCAL= process.env.DATABASE_HOST_LOCAL||'Modifica aquí')

1.- DIALECT = depediento de la base de datos puedes poner 'mysql' o 'postgres'
2.- DATABASE_NAME_LOCAL  = nombre de base de datos
3.- DATABASE_USERNAME_LOCAL = usuario de base de datos
4.- DATABASE_PASSWORD_LOCAL = contraseña de base de datos
5.- DATABASE_HOST_LOCAL = host
6.- DATABASE_PORT_LOCAL = puerto

(No confundas las variables que tengan la palabra "NUBE", deben ser las que contenga la palabra "LOCAL" y recuerda colocar dialect)

