import todoRouter from "./routes/todos";
import cors from "cors";
import express from "express";

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRouter);

app.listen(PORT, function () {
  console.log(`server Start on http://localhost${PORT}`);
});
