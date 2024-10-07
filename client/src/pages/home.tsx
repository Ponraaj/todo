import Task from "../components/task"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Task title="Touch Grass" completedStatus={false} />
    </div>
  )
}

export default Home
