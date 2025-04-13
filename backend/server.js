import express from "express"
import dotenv from "dotenv"
import { connectToDB } from "./database/connectToDB.js";
import cors from "cors"
import eventsRouter from "./routes/eventRoutes.js";
import goalsAndTasksRouter from "./routes/goalsAndTasksRouter.js";
import path from 'path'

const app = express();
const PORT = 3000;
const __dirname = path.resolve();
dotenv.config()
app.use(express.json());


app.use(cors({
    origin: "https://google-calendar-clone-ayab.onrender.com",
    credentials: true,
}));
connectToDB();

app.use("/api/events", eventsRouter);
app.use("/api/goalsAndTasks", goalsAndTasksRouter);

app.use(express.static(path.join(__dirname , "/frontend/dist")))

app.get(/(.*)/ , (req , res)=>{
    res.sendFile(path.join(__dirname , "frontend" , "dist" , "index.html"))
})

app.listen(PORT, () => {
    console.log("App is listening to port", PORT)
})