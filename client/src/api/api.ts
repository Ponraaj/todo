import { TaskProps } from "../components/task";

export const fetchTasks = async (): Promise<TaskProps[]> => {
  const res = await fetch("http://localhost:6969/task")
  if (!res.ok) throw new Error("Failed to fetch tasks")
  return res.json()
}


export const addTask = async (title: string): Promise<TaskProps> => {
  const response = await fetch('http://localhost:6969/task/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
  if (!response.ok) throw new Error('Failed to add task')
  return response.json()
}

export const updateTask = async (id: number, status: boolean, title: string): Promise<TaskProps> => {
  const response = await fetch(`http://localhost:6969/task/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, status })
  })
  if (!response.ok) throw new Error('Failed to update task')
  console.log(response)
  return response.json()
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`http://localhost:6969/task/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error('Failed to delete task')
};
