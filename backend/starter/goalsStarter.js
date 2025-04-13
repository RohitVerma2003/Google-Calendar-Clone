import { connectToDB } from "../database/connectToDB.js"
import Goals from "../models/Goals.js";

const arr = [{ title: "Exercise", category: "Exercise" }, { title: "Learn", category: "Work" }, { title: "Academics", category: "Work" }]

const addGoals = async (req, res) => {
    try {
        await connectToDB();

        const goal1 = new Goals(arr[0]);
        const goal2 = new Goals(arr[1]);
        const goal3 = new Goals(arr[2]);

        await goal1.save();
        await goal2.save();
        await goal3.save();

        console.log("Goals Saved")
    } catch (error) {
        console.log(error);
    }
}

addGoals()