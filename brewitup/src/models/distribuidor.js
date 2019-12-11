const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const DistribuidoresSchema = new mongoose.Schema({
    nomeFantasia: {
        type: String, 
        required: true,
        maxlength: 32
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
            maxlength: 32
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
        cep: {
            type: Number, 
            required: true,
            maxlength: 8
        }
    }],
    camaraFria: {
        type: Boolean, 
        required: true
    },
    caminhaoRefrigerado: {
        type: Boolean, 
        required: true
    },
    equipeComercial: Boolean,
    sommelier: Boolean 
}, {
    timestamps: true
}
);

const Distribuidores = mongoose.model('Distribuidores', DistribuidoresSchema);

module.exports = Distribuidores;