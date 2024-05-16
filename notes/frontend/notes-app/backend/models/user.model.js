const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {type: String},
    email: {type: String},
    password: {type: String},
    createdOn: {type: Date, default: new Date().getTime() },
}, { collection: 'userinfo' });

module.exports = mongoose.model("User",userSchema);