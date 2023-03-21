import { Router } from "express"
import database from "../database"

const router = Router()

router.get("/", async (req, res) => {
  console.log("READED ITENS")
  const db = await database()
  const result = await db.all('SELECT * FROM todo')
  res.json(result)
})

router.get("/:id", (req, res) => {
  res.send("# Buscar dados de uma tarefa")
})

router.post("/", async (req, res) => {
  console.log("CREATED NEW ITEM")
  const db = await database()
  const result = await db.run('INSERT INTO todo(texto) VALUES(?)', [req.body.texto])
  res.json({ id: result.lastID })
})

router.put("/:id", (req, res) => {
  res.send("# Alterar todos os dados de uma tarefa")
})

router.patch("/:id", (req, res) => {
  res.send("# Alterar dados específicos de uma tarefa")
})

router.delete("/:id", (req, res) => { 
  res.send("# Excluir uma tarefa")
})

router.get("/", (req, res) => {
  res.send("Hello world")
})

export default router