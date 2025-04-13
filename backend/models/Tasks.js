import mongoose, { Schema } from "mongoose"

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    goalsId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Goals',
        required : true
    }
});

const Tasks = mongoose.model("Tasks", taskSchema);
export default Tasks;