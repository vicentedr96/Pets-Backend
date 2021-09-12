import Variables from './Settings'; // Acceso a las variables entorno
import Database from './DataBase';   //Acceso a base de datos
import Server from './Server';      // Acceso a servidor
import { Routes } from './Routes';      // Acceso a las rutas

if(process.env.NODE_ENV === "dev"){ //models
    const Pet = require("./models/Pet");
}

const server = Server.init(process.env.PORT);

server.app.use(Routes);
server.start();
