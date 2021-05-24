import Server from './classes/Server';
import cors from 'cors';
const PORT = 3000;
import routes from './routes/index';
import bodyParser from 'body-parser';
import express from 'express';

const server = Server.instance;

server.app.use(cors());

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());


server.app.use(express.static('public'));

server.app.use('/', routes);

server.start(() => {
    console.log('servidor corriendo en ' + PORT);
})



