const express = require('express')
const cors = require('cors')
const app = express()
const TaskModel = require('./models/Task')
const path = require('path')

const v4 = require('uuid').v4

app.use(express.json())
app.use(cors())

const list = [
  new TaskModel({
    id: v4(),
    title: "Faire marcher la list",
    description: "Arriver à afficher cette liste grâce à un map",
    priority: "Haute",
    completed: true
  }),

  new TaskModel({
    id: v4(),
    title: "Comprendre les props",
    description: "Comprendre les tenants et les aboutissants des props",
    priority: "Basse"
  }),
  new TaskModel({
    id: v4(),
    title: "Envoyer une fonction en props",
    description: "Arriver à déclencher dans Task une fonciton envoyée par ToDoList",
    completed: true
  }),
]

app.get('/api/todolist', (req, res) => {
  res.send(list)
})


app.listen(8000, () => console.log("backend is listening on http://localhost:8000/api/todolist"))