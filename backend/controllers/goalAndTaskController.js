import Goals from "../models/Goals.js"
import Tasks from "../models/Tasks.js";

export const getGoals = async (req, res) => {
    try {
        const goals = await Goals.find({});

        res.status(201).json({
            ok: true,
            message: "Goals Fetched Succesfully",
            data: goals
        })
    } catch (error) {
        console.log("Error in Fetching Goals controller", error.message);
        res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
}

export const getTasks = async (req, res) => {
    try {
        const { goalsId } = req.body;

        const tasks = await Tasks.find({ goalsId: goalsId });

        res.status(201).json({
            ok: true,
            message: "Goals Tasks Succesfully",
            data: tasks
        })
    } catch (error) {
        console.log("Error in Fetching Tasks controller", error.message);
        res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
}