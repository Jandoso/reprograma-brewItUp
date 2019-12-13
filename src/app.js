const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//Mongo DB
mongoose.connect('mongodb+srv://jandosoGeneral:12345@omnistack-34kgb.mongodb.net/brewitup?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('conexão com banco de dados feita com sucesso');
});

//ejs como view engine
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use("/", express.static('./src/public'));
app.use("/api-doc", express.static('doc'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//Rotas
const index = require('./routes/index');
const cervejarias = require('./routes/cervejariasRoute');
const distribuidores = require('./routes/distribuidoresRoute');
const cervejas = require('./routes/cervejasRoutes');
const cervejariasAuth = require('./routes/cervejariasAuthRoutes');
const distribuidoresAuth = require('./routes/distribuidoresAuthRoutes');

app.use('/api/', index);
app.use('/api/cervejarias', cervejariasAuth);
app.use('/api/cervejarias', cervejarias);
app.use('/api/cervejas', cervejas);
app.use('/api/distribuidores', distribuidoresAuth);
app.use('/api/distribuidores', distribuidores);
app.get('/api-doc', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/doc/index.html'));
});

module.exports = app;