import Server from "../Server";
import Database from '../DataBase/index';

const { app, server } = Server.getInstace();
const database = Database.getInstace();

app.use('/pets', require('./pets'));

module.exports = { Routes: app, server, database };