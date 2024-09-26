const express = require('express');
const mongoose = require('mongoose')

const app = express()


app.listen(process.env.PORT, () => {
    console.log("The server is running on port 3000")
})
