const router = require('express').Router()
const User = require('../models/User')

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const saveUser = await user.save()
        res.json({
            error: null,
            data: saveUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router