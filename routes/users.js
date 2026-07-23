const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const usersList = require('../data/usersList');

router.get('/users', (req, res) => {
    res.render('users', {users: usersList})
})

router.get('/signup', (req, res) => {
    res.render("kayitol")
})

router.post('/signup', (req, res) => {
    const { email, password } = req.body;

    const newUser = {
        email,
        password
    }

    usersList.push(newUser);

    res.redirect('/users')
})



module.exports = router;