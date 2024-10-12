import { useState, useEffect } from "react"
import Task, { TaskProps } from "../components/task"
import TaskInput from "../components/taskinput"
import { fetchTasks, addTask as newTask, updateTask as update, deleteTask as removeTask } from "../api/api"

function Home() {

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetchTasks()
        setTasks(res)
      } catch (err) {
        console.log(err)
      }
    }

    getTasks()
  }, [])


  const [tasks, setTasks] = useState<TaskProps[]>([])

  const addTask = async (title: string) => {
    try {
      const task = await newTask(title)
      setTasks((prev) => [...prev, task])
    } catch (err) {
      console.log(err)
    }
  }

  const updateTask = async (id: number, status: boolean, title: string) => {
    try {
      const task = await update(id, status, title)
      setTasks((prev) =>
        prev.map((t) => t.id === task.id ? { ...t, status: task.status, title: title !== undefined ? task.title : t.title } : t)
      )
    } catch (err) {
      console.log(err)
    }
  }

  const deleteTask = async (id: number) => {
    try {
      await removeTask(id)
      setTasks((prev) => prev.filter(t => t.id !== id))
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-4xl text-center mt-4 p-4 font-bold ">TODO</h1>
      <TaskInput addTask={addTask} />
      <div className="mt-4">
        {/* {tasks.map((task) => console.log(task))} */}
        {tasks.map((task,) => (
          <Task id={task.id} key={task.id} title={task.title} status={task.status} onUpdate={(id, newStatus) => updateTask(id, newStatus, task.title)} onDelete={() => { deleteTask(task.id) }} />
        ))}
      </div>
    </div>
  )
}

export default Home
