const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

// Capturar body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

// Conexión a BD
const url = `mongodb+srv://esotilin:${process.env.PASSWORD}@cluster0.vlsp8xo.mongodb.net/${process.env.DB}`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('conectao a bd XDXFXDCXDXCHJMANAJASG'))
    .catch((error) => console.log('error de bd, tas todo wey: ' + error))

// Importar las Rutas
const authRoutes = require('./routes/auth')

// Ruta para el Middleware
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Funciona correctamente wei los weyes'
    })
})

// Arrancar el servidor
const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
    console.log(`Conectao, bien hecho xdxdxdxdxx  Puerto: ${PORT}`)
})