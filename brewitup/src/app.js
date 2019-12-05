const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Mongo DB
mongoose.connect('mongodb+srv://jandosoGeneral:12345@omnistack-34kgb.mongodb.net/brewitup?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('conexão com banco de dados feita com sucesso');
});

//Body Parser
app.use(bodyParser.json());

//Rotas
const index = require('./routes/index');
const cervejarias = require('./routes/cervejariasRoute');
const distribuidores = require('./routes/distribuidoresRoute');
const session = require('../src/routes/sessionRoute');

app.use('/', index);
app.use('/cervejarias', cervejarias);
app.use('/distribuidores', distribuidores);
app.use('/session', session);

module.exports = app;