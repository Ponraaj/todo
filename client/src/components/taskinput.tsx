import { useState, ChangeEvent, FormEvent } from "react"

interface TaskInputProps {
  addTask: (title: string) => void
}

function TaskInput({ addTask }: TaskInputProps) {
  const [task, setTask] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (task.trim()) {
      addTask(task)
      setTask("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4 w-full max-w-md mx-auto">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter new task here..."
        required
        className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg "
      >
        +
      </button>
    </form>
  )
}

export default TaskInput
