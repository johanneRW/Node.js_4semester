const express = require('express')
const app = express()

app.use(express.static("public"))

app.get("birds/", (req, res) => {
    res.send({ data: birds })
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/frontpage/frontpage.html")
})

app.get("/tanks",(req, res) =>{(__dirname+"/public/tanks/tanks.html")

})

app.listen(8080, (error) => {
    if (error) {
        console.log
        return
    }
    console.log("Server is running on port", 8080)
})