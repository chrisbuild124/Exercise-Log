import * as controller from './controller.mjs'
import 'dotenv/config' // Imports the dotenv File
import express from 'express'

const app = express() // starts application

app.use(express.json()) //makes the parsed data available in req.body to controller.mjs

app.post('/exercises', controller.postMethod) // Request is being made to /users, and calling another function
app.get('/exercises', controller.getAll)
app.get('/exercises/:id', controller.getMethodId)
app.put('/exercises/:id', controller.putMethodId)
app.delete('/exercises/:id', controller.deleteMethodId)

app.listen(process.env.PORT, ()=> {
    console.log(`Server listening on PORT ${process.env.PORT}`)
})
