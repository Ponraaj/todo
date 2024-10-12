import express from "express";
import router from "./routes/task_router";
import cors from "cors"


const app = express();
const port = 6969;

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  credentials: true,
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.send("<h1>Hello world</h1>")
})

app.use('/task', router)

app.listen(port, () => console.log(`Server running on http://localhost:${port}/`))
