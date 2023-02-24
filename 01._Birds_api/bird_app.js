const express = require('express')
const app = express()

app.use(express.json())

app.listen(8080, () => {
   console.log("Server is running on port", 8080)
})

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
let current_id = 2

const makeMatchingId = (id) => {
   return (bird) => {
      return bird.id === Number(id)
   }
}

app.get('/', (req, res) => {
   res.send('Welcome to the birds-app!')
})

app.get('/birds/', (req, res) => {
   res.send({ data: listOfBirds })
})

app.get('/birds/:id', (req, res) => {
   const matchingId = makeMatchingId(req.params.id)
   const match = listOfBirds.find(matchingId)

   if (match !== undefined) {
      res.send({ data: match })
   } else {
      res.sendStatus(404)
   }
})

/* //post whitout a database to autoincrement the id
   //problem if you delete the higest id
app.post('/birds/', (req, res) => {
   if (Object.keys(req.body).length === 0) {
      res.sendStatus(400)
   } else {
      // find next available bird ID
      const ids = listOfBirds.map(bird => bird.id)
      const nextId = Math.max(...ids) + 1

      // put new bird in the list
      const newBird = req.body
      newBird['id'] = nextId
      listOfBirds.push(newBird)

      res.sendStatus(200)
   }
}) */
app.post('/birds/', (req, res) => {
   if (Object.keys(req.body).length === 0) {
      res.sendStatus(400)
   } else {
      // put new bird in the list
      const newBird = req.body
      newBird['id'] = ++current_id
      listOfBirds.push(newBird)

      res.sendStatus(200)
   }
})



//update a bird
app.put('/birds/:id', (req, res) => {
   const matchingId = makeMatchingId(req.params.id)
   const match = listOfBirds.find(matchingId)

   if (match !== undefined) {
      const birdIndex = listOfBirds.findIndex(matchingId)
      // update entire bird
      listOfBirds[birdIndex] = req.body
      // but keep ID of bird, even if req.body contains another ID
      listOfBirds[birdIndex].id = match.id
      res.sendStatus(200)
   } else {
      res.sendStatus(404)
   }
})

// patch a bird
app.patch('/birds/:id', (req, res) => {
   const matchingId = makeMatchingId(req.params.id)
   const match = listOfBirds.find(matchingId)

   if (match !== undefined) {
      const birdId = match.id
      const birdIndex = listOfBirds.findIndex(matchingId)
      // update all keys in JSON body 
      Object.entries(req.body).forEach(([key, value]) => {
         listOfBirds[birdIndex][key] = value
      })
      // keep ID of bird
      listOfBirds[birdIndex].id = birdId
      res.sendStatus(200)
   } else {
      res.sendStatus(404)
   }
})


/* //delete whitout a database connection
app.delete('/birds/:id', (req, res) => {
   const matchingId = makeMatchingId(req.params.id)
   const match = listOfBirds.find(matchingId)
//convention says to put error-message first 
   if (match !== undefined) {
      // make new list of birds, without the bird that is removed
      listOfBirds = listOfBirds.filter(({ id }) => id !== Number(req.params.id))
      res.sendStatus(200)
   } else {
      res.sendStatus(404)
   }
}) */

//delete whitout a database connection
app.delete('/birds/:id', (req, res) => {
   const matchingId = makeMatchingId(req.params.id)
   const match = listOfBirds.find(matchingId)
   //convention says to put error-message first 
   if (match === -1) {
      res.sendStatus(404)
   } else {
      listOfBirds = listOfBirds.filter(({ id }) => id !== Number(req.params.id))
      res.sendStatus(200)
   }

})
