const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log('⚠️ Insecure world!')
    res.status(200).send('⚠️ Insecure world!')
})
module.exports = app