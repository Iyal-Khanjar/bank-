const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//bank has { name, cash ,credit,isActive}
const BankSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cash: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,

    },
})


const BankModel = mongoose.model('banks', BankSchema);

module.exports = {
    BankModel
}
