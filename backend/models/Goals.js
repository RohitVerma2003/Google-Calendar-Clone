import mongoose, { Schema } from "mongoose"

const goalsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Goals = mongoose.model("Goals", goalsSchema);
export default Goals;