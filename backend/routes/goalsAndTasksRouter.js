import express from "express";
import { getGoals, getTasks } from "../controllers/goalAndTaskController.js";
const router = express.Router();

router.get('/allGoals', getGoals);
router.post('/allTasks', getTasks);

export default router;