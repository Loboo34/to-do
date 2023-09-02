const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        unique: true
    }
});

// userSchema.statics.singup = async function(name, email, password) {
//     const exists = await this.findOne({email})

//     if (exists) {
//        throw Error('email already exists')
//     }

//     const user = await this.create({ name, email, password})

//     return user
// }

module.exports = mongoose.model('User', userSchema)