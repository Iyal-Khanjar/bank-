const express = require('express');
const bankController = require('../controllers/bank.controller')
const router = express.Router();


router.get('/', (req, res) => {
    bankController.getAll(req, res);
}).post('/', (req, res) => {
    bankController.addNewUser(req, res);
}).delete('/:id', (req, res) => {
    bankController.deleteUser(req, res);
}).put('/:id', (req, res) => {
    bankController.updateUser(req, res);
})

module.exports = router;