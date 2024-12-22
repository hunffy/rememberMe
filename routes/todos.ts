import express, { Request, Response } from "express";
import todoData from "../data/todos.json";

const router = express.Router();

type Todo = {
  id: number;
  title: string;
  deadLine: string[];
};

const TodosTyped: Todo[] = todoData;

//Get:AllTodo
router.get("/", (req: Request, res: Response) => {
  res.json(TodosTyped);
  console.log("get요청. : todoList전체 제공");
});

export default router;
