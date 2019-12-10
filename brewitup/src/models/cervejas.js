const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const cervejasSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxlength: 32
    },
    estilo: {
        type: String,
        required: true,
        maxlength: 32
    },
    escola: {
        type: String,
        required: true,
        maxlength: 32
    },
    teorAlcoolico: {
        type: Number,
        required: true
    },
    embalagem: {
        type: String,
        required: true,
        maxlength: 32
    },
    volume: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number
    },
    preco: {
        type: Number,
        required: true,
        maxlength: 32
    },
    cervejaria: {
        type: ObjectId,
        ref: "Cervejarias",
        required: true
    },
    descricao: {
        type: String,
        required: true,
        maxlength: 2000
    },
    pasteurizada: {
        type: String,
        required: true,
        maxlength: 32
    },
    foto: {
        data: Buffer,
        contentType: String
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Cervejas", cervejasSchema);


