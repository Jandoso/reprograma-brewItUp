const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const CervejariasSchema = new mongoose.Schema({
    nomeFantasia: {
        type: String, 
        required: true,
        maxlength: 100
    },
    razaoSocial: {
        type: String, 
        required: true,
        maxlength: 100
    },
    email: {
        type: ObjectId,
        ref: "cervejariaUsuario",
        req: true
    },
    telefone: {
        type: Number, 
        required: true,
        maxlength: 32
    },
    cnpj: {
        type: Number, 
        required: true,
        maxlength: 32
    },
    endereco: [{
        nomeRua: {
        type: String, 
        required: true,
        maxlength: 100
    },
     numero: {
        type: Number, 
        required: true,
        maxlength: 6
    },
     bairro: {
        type: String, 
        required: true,
        maxlength: 32
    },
     cidade: {
        type: String, 
        required: true,
        maxlength: 32
    },
     estado: {
        type: String, 
        required: true,
        maxlength: 32
    },
     cep: {
        type: Number, 
        required: true,
        maxlength: 8
    }
     }]
}, {
    timestamps: true
}
);

const Cervejarias = mongoose.model('Cervejarias', CervejariasSchema);

module.exports = Cervejarias;