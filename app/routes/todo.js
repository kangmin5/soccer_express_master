import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

app.use(function(_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
app.post('/todo', cors(corsOptions),(req, res) => {
    new TodoService().addTodo(req, res)
})

export default app

// import { todo, todolist } from '../controllers/todoController'
// module.exports = x => {
//     console.log(' todo.route로 들어옴 ')
//     x.app.post(`${x.url}/addtodo`, todo)
//     x.app.get(`${x.url}/list`, todolist)
// }