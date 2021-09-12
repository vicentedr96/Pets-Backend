import Express from 'express';
import Color from 'colors/safe';
import Path from 'path';
import Cors from 'cors';
import Http from 'http';

export default class Server {

    constructor(port) {
        this.port = port;
        this.app = Express();
        this.app.use(Cors());
        this.apollo = null;  
        this.convertData();  
        this.server = Http.createServer(this.app);  
    }

    static init(port) {
        return new Server(port);
    }

    publicFolder() {
        const publicPath = (Path.resolve(__dirname, '../public'));
        this.app.use(Express.static(publicPath));
    }

    convertData() {
        this.app.use(Express.urlencoded({ extended: false }))
        this.app.use(Express.json({type: "*/*"}))
    }

    viewHbs() {
        this.app.set('view engine', 'hbs');
    }

    start() {
        
        this.server.listen(this.port,{log:false, origins:'*:*'}).on('error', (e) => {
            if (e.code !== 'EADDRINUSE' && e.code !== 'EACCES') {
                throw e;
            }

            console.error(Color.bgGray('❌  Port ' + this.port + ' is busy'));

        }).on('listening', () => {
            console.log(Color.bgBlue('✅ Listening on http://localhost:' + this.port));
        });
        this.publicFolder();
        this.viewHbs();

    }

    static getInstace() {
        return this.Server || (this.Server = new Server());
    }

}

