import { useState } from "react";

export interface TaskProps {
  "id": number,
  "title": string,
  "status": boolean,
  "onUpdate": (id: number, newStatus: boolean) => void,
  "onDelete": () => void
}

function Task({ id, title, status, onUpdate, onDelete }: TaskProps) {

  const [completedStatus, setStatus] = useState<boolean>(status)

  const handleClick = () => {
    const newStatus = !completedStatus
    setStatus((prev) => !prev)
    onUpdate(id, newStatus)
  }

  return (
    <div className="flex items-center w-full max-w-md mx-auto p-4 border-b border-gray-200">
      <input type="checkbox" checked={completedStatus} className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" onChange={handleClick} />
      <p className={`ml-3 text-lg cursor-pointer ${completedStatus ? "line-through text-gray-500" : "text-gray-800"}`}>{title}</p>
      <button className="ml-auto text-red-500" onClick={() => onDelete()}>Delete</button>
    </div>)
}
export default Task;
