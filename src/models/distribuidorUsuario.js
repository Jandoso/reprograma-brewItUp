const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const DistribuidorUsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxlength: 100
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String
}, {
    timestamps: true
}
);


DistribuidorUsuarioSchema
    .virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

    DistribuidorUsuarioSchema.methods = {
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


const DistribuidorUsuario = mongoose.model('DistribuidorUsuario', DistribuidorUsuarioSchema);

module.exports = DistribuidorUsuario;