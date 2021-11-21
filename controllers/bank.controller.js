const BankModel = require('../models/bank.model').BankModel;

// get all 
const getAll = ((req, res) => {
    BankModel.find({}, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
})



// add new User
const addNewUser = ((req, res) => {
    //bank has { name, cash ,credit,isActive}
    const { name, cash, credit, isActive } = req.body;
    const user = new BankModel({
        name: name,
        credit: cash,
        credit: credit,
        isActive: isActive,
    })
    user.save().then(data => {
        res.status(200).json(data);
    })
})

// delete bank
const deleteUser = ((req, res) => {
    const _id = req.params.id;

    BankModel.findByIdAndDelete(_id, (err, data) => {
        if (err) throw err;
        if (data) {
            return res.status(200).json({ deletedObj: data });
        }
        return res.status(400).json({ deletedObj: 'Not Found' })
    })
})

// update bank
const updateUser = ((req, res) => {
    const _id = req.params.id;
    const { name, cash, credit, isActive } = req.body;
    const updatedUser = {
        name: name,
        credit: cash,
        credit: credit,
        isActive: isActive,
    }
    BankModel.findByIdAndUpdate(_id, updatedUser, (err, data) => {
        if (err) throw err;
        if (data) {
            return res.status(201).json({ updatedUser: { _id, ...updatedUser } })
        }
        return res.status(400).json({ updatedUser: 'Not Found' })
    })
})
module.exports = {
    getAll,
    addNewUser,
    deleteUser,
    updateUser,
}