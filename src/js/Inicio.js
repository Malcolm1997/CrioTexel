const express = require('express')
const appEx = express()
const PORT = 3000

appEx.listen(process.env.PORT || PORT, () => {
    console.log(`App escuchando el puerto ${PORT}`)
})


appEx.get('/' , (req, res) => {
    res.sendFile(__dirname + "/../index.html")
    
})