const mongoose = require('mongoose');

const DistribuidoresSchema = new mongoose.Schema({
    nomeFantasia: String,
    endereco: {
        nomeRua: String,
        numero: Number,
        bairro: String,
        cidade: String,
        cep: String
    },
    telefone: String,
    cnpj: String,
    camaraFria: Boolean,
    caminhaoRefrigerado: Boolean
});

const Distribuidores = mongoose.model('Distribuidores', DistribuidoresSchema);

module.exports = Distribuidores;