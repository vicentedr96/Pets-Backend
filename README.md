
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
        * Nombre de base de datos (ejemplo, pets)
        * Usuario de base de datos (ejemplo, root)
        * Contraseña  de base de datos (ejemplo, root)
        * Host   (ejemplo, localhost)
        * Puerto (ejemplo, 300, 3001, etc)
        * (No es necesario crear las tablas, el proyecto se encargara de ello, unicamente crear la base de datos)

* Una vez teniendo la información anterior, localiza la carpeta siguiente 
C:\ ... \Pets-Backend\src\Settings en la carpeta Setting encontraras un archivo index.js, 
en ella habrá variables de entorno, cambia las variables de entorno que tenga el nombre "LOCAL" con la información que obtuviste  en el paso anterior, modifica dentro de las comillas simples 
(ejemplo, ```javascript process.env.DATABASE_HOST_LOCAL= process.env.DATABASE_HOST_LOCAL||'Modifica aquí' ```)

    * DIALECT = depediento de la base de datos puedes poner 'mysql' o 'postgres'
    * DATABASE_NAME_LOCAL  = nombre de base de datos
    * DATABASE_USERNAME_LOCAL = usuario de base de datos
    * DATABASE_PASSWORD_LOCAL = contraseña de base de datos
    * DATABASE_HOST_LOCAL = host
    * DATABASE_PORT_LOCAL = puerto
    * (No confundas las variables que tengan la palabra "NUBE", deben ser las que contenga la palabra "LOCAL" y recuerda colocar dialect)

* Ahora dentro de cmd o powershell y diríjase a la ruta de proyecto, y ejecute el comando
"npm run desarrollo" (sin comillas), este comando levantara el servidor, base de datos y en caso de no tener la tabla requerida esta la creara automáticamente. Una vez ya creada la tabla, puedes usar las peticiones (en este enlace te dará la información de las peticiones, https://documenter.getpostman.com/view/9401113/U16kr5aq) mantén el servidor levantado mientras hagas las peticiones en tu postman

* Para las pruebas de integración y de cobertura, diríjase a la ruta de proyecto, y ejecute el comando 
"npm run test" (sin comillas)

Markup : ![picture alt](https://res.cloudinary.com/hstxgfp2z/image/upload/v1631466304/test_phscz9.png)


¡PRUEBALO RAPIDO!
------------

* En caso de que quieras probarlo lo más rápido posible la api, ya se encuentra en la nube (https://github.com/vicentedr96/Pets-Backend)