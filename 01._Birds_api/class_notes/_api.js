const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.static("public"))

let tanks = [{
    name: "Leopard",
}
    , {
    name: "Tiger"
}]


app.get("birds/", (req, res) => {
    res.send({ data: birds })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})

app.get("/tanks", (req, res) => {
    (__dirname + "/public/tanks/tanks.html")

})

app.get("/api/tanks", (req, res) => {
    (__dirname + "/public/tanks/tanks.html")
    res.send(tanks)
})

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
})

app.get("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount })
})
app.listen(8080, (error) => {
    if (error) {
        console.log
        return
    }
    console.log("Server is running on port", 8080)

    app.get("/time/time", (req, res) => {
        res.send({ timeUTC: new Date() },
            {
                timeLocal: Date(),
                unixTimestamp: Date.now()
            })
    })

    
const days=["Sunday","Monday","Thuseday","Wedensday","Thurday","Friday","Saturday"]

    app.get("/time/day", (req, res) => {
            res.send({data:days[new Date().getDay()]})
    })
const months=["jan","feb"]
    app.get("/time/month", (req, res) => {
        res.send({data:months[new Date().getMonth()]})
    })
})

