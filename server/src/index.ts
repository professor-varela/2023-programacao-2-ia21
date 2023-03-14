import express from "express"
import cors from "cors"

const PORT = 3000
const app = express()

// Ação   - HTTP        - BD
// Create - POST        - INSERT
// Read   - GET         - SELECT
// Update - PUT PATCH   - UPDATE
// Delete - DELETE      - DELETE

app.use(cors())
app.use(express.json())

app.get("/tarefa", (req, res) => {
  res.json([
    {
      title: "lavar louças",
      date: Date.now(),
      fineshed: false
    }
  ])
})

app.get("/tarefa/:id", (req, res) => res.send("# Buscar dados de uma tarefa"))

app.post("/tarefa", (req, res) => {
  console.log("recebido:", req.body)
  res.json({ teste: "# Inserir uma tarefa"})
})

app.put("/tarefa/:id", (req, res) => res.send("# Alterar todos os dados de uma tarefa"))

app.patch("/tarefa/:id", (req, res) => res.send("# Alterar dados específicos de uma tarefa"))

app.delete("/tarefa/:id", (req, res) => res.send("# Excluir uma tarefa"))

app.get("/", (req, res) => res.send("Hello world"))

app.listen(PORT, () => console.log(`⚡ server is running, on port ${PORT}`))