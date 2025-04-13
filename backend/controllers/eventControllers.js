import Event from "../models/Event.js";

export const addEvent = async (req, res) => {
    try {
        const { title, category, dateStart, dateEnd } = req.body;

        const event = new Event({ title, category, dateStart, dateEnd });
        await event.save();

        res.status(201).json({
            ok: true,
            message: "Event Saved",
            data: event
        })
    } catch (error) {
        console.log("Error in Adding Event controller", error.message);
        res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
}

export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.body;
        const event = await Event.findByIdAndDelete({ _id: id });

        res.status(201).json({
            ok: true,
            message: "Event Deleted Succesfully",
            data: event
        })
    } catch (error) {
        console.log("Error in Deleting Event controller", error.message);
        res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
}

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(201).json({
            ok: true,
            message: "Events Fetched Succesfully",
            data: events
        })
    } catch (error) {
        console.log("Error in Fetching Events controller", error.message);
        res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
}

export const updateEvent = async (req, res) => {
    try {
        const { _id, dateStart, dateEnd } = req.body;
        const event = await Event.findByIdAndUpdate(_id, { dateStart, dateEnd });
        res.status(201).json({
            ok: true,
            message: "Events Updated Succesfully",
            data: event
        })
    } catch (error) {
        console.log("Error in Update Events controller", error.message);
        res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
}