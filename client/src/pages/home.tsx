import { useState } from "react"
import Task, { TaskProps } from "../components/task"
import TaskInput from "../components/taskinput"

function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([
    { title: "Touch Grass", completedStatus: false },
    { title: "Read a Book", completedStatus: true }])

  const addTask = (title: string) => {
    setTasks((prev) => [...prev, { title, completedStatus: false }])
  }


  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-4xl text-center mt-4 p-4 font-bold ">TODO</h1>
      <TaskInput addTask={addTask} />
      <div className="mt-4">
        {tasks.map((task, i) => (
          <Task key={i} title={task.title} completedStatus={task.completedStatus} />
        ))}
      </div>
    </div>
  )
}

export default Home
