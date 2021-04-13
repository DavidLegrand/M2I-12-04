const express = require('express')
const app = express()

app.use(express.json())

const list = [
  { id: 1, title: "Faire marcher la list", description: "Arriver à afficher cette liste grâce à un map", priority: "Haute", completed: true },
  { id: 2, title: "Comprendre les props", description: "Comprendre les tenants et les aboutissants des props", priority: "Basse" },
  { id: 3, title: "Envoyer une fonction en props", description: "Arriver à déclencher dans Task une fonciton envoyée par ToDoList", completed: true },
]

app.get('/api/todolist', (req, res) => {
  res.send(list)
})

app.listen(8000, () => console.log("backend is listening on http://localhost:8000/api/todolist"))