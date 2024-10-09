import { useState } from "react";

export interface TaskProps {
  "title": string,
  "completedStatus": boolean
}

function Task({ title, completedStatus }: TaskProps) {


  const [status, setStatus] = useState(completedStatus)
  const handleClick = () => {
    setStatus((prev) => !prev)
  }

  return (
    <div className="flex items-center w-full max-w-md mx-auto p-4 border-b border-gray-200">
      <input type="checkbox" checked={status} className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" onClick={handleClick} />
      <p className={`ml-3 text-lg cursor-pointer ${status ? "line-through text-gray-500" : "text-gray-800"}`}>{title}</p>
    </div>)
}

export default Task;
