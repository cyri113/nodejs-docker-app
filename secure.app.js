const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log('🔐 Secure world!')
    res.status(200).send('🔐 Secure world!')
})
module.exports = app