import mongoose, { Schema } from "mongoose"

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category : {
        type : String,
        required : true
    },
    dateStart : {
        type : Date,
        required : true
    },
    dateEnd : {
        type : Date,
        required : true
    }
});

const Event = mongoose.model("Event" , eventSchema);
export default Event;