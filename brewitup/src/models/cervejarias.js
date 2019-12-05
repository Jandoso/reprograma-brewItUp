const mongoose = require('mongoose');

const CervejariasSchema = new mongoose.Schema({
    nomeFantasia: String,
    telefone: String,
    cnpj: String,
    endereco: {
     nomeRua: String,
     numero: Number,
     bairro: String,
     cidade: String,
     estado: String,
     cep: String
     },
     cervejas: [{
         nome: String,
         estilo: String,
         escola: String,
         teorAlcoolico: Number,
         embalagem: String,
         volume: Number,
         quantidade: Number,
         preco: Number,
         descricao: String,
         pasteurizada: Boolean
     }]
});

const Cervejarias = mongoose.model('Cervejarias', CervejariasSchema);

module.exports = Cervejarias;