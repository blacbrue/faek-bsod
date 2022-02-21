const express = require("express")
const path = require("path")
const app = express()
const http = require("http").createServer(app)

app.set("view engine", "ejs")
app.use(express.static("./css"))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/win7", (req, res) => {
    res.render("win7")
})

http.listen(8080, () => { console.log("Server running on port 8080") })