import Sequelize from 'sequelize';
import Color from 'colors/safe';
import Variables from '../Settings'; //ACCESO PARA EL TEST

export default class Database {

    static Database = null;
    cnn = Sequelize;
    connected = false;

    constructor() {
        if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "test") {
            if (process.env.NODE_ENV != "test") {
                console.log(Color.bgBlue('🟡 Development '));
            }
            this.cnn = new Sequelize(process.env.DATABASE_NAME_LOCAL, 
                process.env.DATABASE_USERNAME_LOCAL, process.env.DATABASE_PASSWORD_LOCAL, {
                host: process.env.DATABASE_HOST_LOCAL,
                dialect: process.env.DIALECT,
                port: process.env.DATABASE_PORT_LOCAL,
                define: {
                    timestamps: false,
                    charset: "utf8",
                    collate: "utf8_unicode_ci",
                    freezeTableName: true
                },
                dialectOptions: {
                    connectTimeout: 1000
                },
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                logging: false
            });
            this.connectedDB();
        } else {
            console.log(Color.bgBlue('🔵 Production  '));
            this.cnn = new Sequelize(process.env.DATABASE_NAME,
                process.env.DATABASE_USERNAME,
                process.env.DATABASE_PASSWORD, {
                host: process.env.DATABASE_HOST,
                dialect: "mysql",
                port: process.env.DATABASE_PORT,
                define: {
                    timestamps: false,
                    charset: "utf8",
                    collate: "utf8_unicode_ci",
                    freezeTableName: true
                },
                dialectOptions: {
                    connectTimeout: 1000
                },
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                logging: false
            });
            this.connectedDB();
        }
    }

    connectedDB() {

        if ( process.env.NODE_ENV === "test") {
             this.cnn.authenticate()
        } else {
            this.cnn.sync() 
                .then(() => console.log(Color.bgBlue('✅ Connected database')))
                .catch(error => console.log(Color.bgGray('❌ Unable to connect to the database:', error?.name)))
        }
    }

    static getInstace() {
        return this.Database || (this.Database = new Database());
    }

}