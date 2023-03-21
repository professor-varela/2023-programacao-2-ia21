import { Router, json } from "express"
import cors from "cors"
import routerTarefas from "./tarefas.routes"

const router = Router()

router.use(cors())
router.use(json())
router.use("/tarefa", routerTarefas)
export default router