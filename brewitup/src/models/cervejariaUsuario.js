const mongoose = require('mongoose');

const CervejariaUsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxlength: 100
    },
    senha: {
        type: String,
        required: true,
        maxlength: 8
    }
}, {
    timestamps: true
}
);

const CervejariaUsuario = mongoose.model('CervejariaUsuario', CervejariaUsuarioSchema);

module.exports = CervejariaUsuario;