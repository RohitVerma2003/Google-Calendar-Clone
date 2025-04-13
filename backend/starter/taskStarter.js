import { connectToDB } from "../database/connectToDB.js"
import Tasks from "../models/Tasks.js";

const arr = [{ title: "Running", category: "Exercise", goalsId: "67fa563af2f53c20e65e2680" }, { title: "AI", category: "Work", goalsId: "67fa563af2f53c20e65e2681" }, { title: "Maths", category: "Work", goalsId: "67fa563af2f53c20e65e2682" }]

const addTasks = async (req, res) => {
    try {
        await connectToDB();

        const task1 = new Tasks(arr[0]);
        const task2 = new Tasks(arr[1]);
        const task3 = new Tasks(arr[2]);

        await task1.save();
        await task2.save();
        await task3.save();

        console.log("Tasks Saved")
    } catch (error) {
        console.log(error);
    }
}

addTasks()