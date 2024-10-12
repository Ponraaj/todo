import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const db = new PrismaClient()

router.post('/add', async (req, res) => {
  try {

    const { title } = req.body;
    const task = await db.tasks.create({ data: { title } })

    res.json(task)
  } catch (err) {
    res.status(404).json({ error: "Error creating new Task" })
  }
})

router.get('/', async (req, res) => {
  try {
    const tasks = await db.tasks.findMany()

    res.json(tasks)

  } catch (err) {
    res.status(404).json({ error: "Error fetching tasks" })
  }
})
const update_fn = async (
  req,
  res) => {

  try {
    const id = req.params.id
    const { title, status } = req.body

    if (!id || isNaN(Number(id))) {
      return res.json({ error: "Invalid task ID" })
    }

    if (!title && status === undefined) {
      return res.json({ error: "At least one field (title or status) is required" })
    }

    const existingTask = await db.tasks.findUnique({
      where: { id: Number(id) }
    })

    if (!existingTask) {
      return res.json({ error: "Task not found" })
    }

    const updateData: {
      title?: string,
      status?: boolean
    } = {}
    if (title !== undefined) updateData.title = title
    if (status !== undefined) updateData.status = status

    const task = await db.tasks.update({
      where: { id: Number(id) },
      data: updateData
    })
    res.json(task)
  } catch (err) {
    res.json({ error: "Error updating task" })
  }
}
router.put('/:id', update_fn)

router.delete('/:id', async (req, res) => {
  const id = req.params?.id
  await db.tasks.delete({ where: { id: Number(id) } })
  res.status(204).send()
})


export default router
