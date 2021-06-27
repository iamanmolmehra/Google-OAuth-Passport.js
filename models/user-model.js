const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../database/db')

const userSchema = new Schema({
    username: String,
    googleId: String,
});

const User = mongoose.model('passport', userSchema);

module.exports = User;