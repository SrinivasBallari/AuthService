const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = () => {
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.listen(PORT,() => {
        console.log(`server started on port: ${PORT}`);
    });
}

setupAndStartServer();