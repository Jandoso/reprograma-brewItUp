const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const CervejariaUsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxlength: 100
    },
    hashed_password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    salt: String
}, {
    timestamps: true
}
);


CervejariaUsuarioSchema
    .virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

    CervejariaUsuarioSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};



const CervejariaUsuario = mongoose.model('CervejariaUsuario', CervejariaUsuarioSchema);

module.exports = CervejariaUsuario;