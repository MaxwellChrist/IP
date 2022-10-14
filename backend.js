const PORT = 8000
const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()
const app = express()
app.use(cors())
app.get("/", (req, res) => {
    res.json("hi")
})
app.get("/data", (req, res) => {
    console.log(req)
    let options = {
        method: "GET",
        url: `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_apiKey}&ipAddress=8.8.8.8`
    }
    axios.request(options).then((response) => {
        console.log("backend error: " + res.json(response.data))
        res.json(response.data)
    }).catch((error) => {
        console.log("backend error: " + res.json(error))
        res.json(error)
    })
})
app.listen(8000, () => console.log(`Backend is running on port ${PORT}`))