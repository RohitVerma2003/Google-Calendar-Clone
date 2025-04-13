import express from "express";
import { addEvent, deleteEvent, getEvents, updateEvent } from "../controllers/eventControllers.js";
const router = express.Router();

router.post('/add', addEvent);
router.delete('/delete', deleteEvent);
router.get('/all', getEvents);
router.post('/update', updateEvent);

export default router;