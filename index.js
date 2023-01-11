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

// Importar las Rutas

// Ruta para el Middleware
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