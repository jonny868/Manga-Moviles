const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    admin: { type: Boolean, required: true },
    id: { type: String, required: true },
    picture: { type: String, default: 'https://res.cloudinary.com/comicseries/image/upload/v1649827898/imgThumb_svogrq.png', required: true },
 
})


module.exports = model('User', UserSchema)