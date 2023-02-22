const express = require('express')
const app = express()

app.use(express.json())

let listOfBirds = [
   {
      'id': 1,
      'name': 'Bent',
      'species': 'Blackbird',
      'age': 4
   },
   {
      'id': 2,
      'name': 'Mette',
      'species': 'Blue tit',
      'age': 7
   },
]

app.get('/', (req, res) => {
   res.send('Welcome to the birds-app!')
})

app.get('/birds/', (req, res) => {
   res.send({data:listOfBirds})
})

app.get('/birds/:id', (req, res) => {

   const matchingId = (bird) => {
      return bird.id === Number(req.params.id)
   }

   const match = listOfBirds.find(matchingId)

   if (match !== undefined) {
      res.send({data: match})
   } else {
      res.sendStatus(404)
   }

})


app.listen(8080, () => {
   console.log("Server is running on port", 8080)})