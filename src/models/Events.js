import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    teamName: {
        type: String
    },
    discord: {
        type: String
    },
    transacImg: {
        type: String
    },
    applicantId: {
        type: String
    },
    leader: {
        type: String,
        required: [true, "Please provide a leader name"],
    },
    email: {
        type: String,
        required: [true, "Please provide the email"],
    },
    phone: {
        type: Number,
        required: [true, "Please provide the phone number"],
    },
    college: {
        type: String,
        required: [true, "Please provide the college"],
    },
    usn: {
        type: String
    },
    teamSize: {
        type: Number,
        required: [true, "Please provide the team size"],
    },
    members: [
        {
            name: {
                type: String
            },
            email: {
                type: String
            },
            phone: {
                type: Number
            },
            college: {
                type: String
            },
            usn: {
                type: String
            }
        }
    ],
    fee: {
        type: Number,
        required: [true, "Please provide the fees"],
    },
    eventName: {
        type: String,
        required: [true, "Please provide the event name"],
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Event = mongoose.models.events || mongoose.model("events", eventSchema);

export default Event;