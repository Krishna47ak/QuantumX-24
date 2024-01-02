import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
    transacImg: {
        type: String
    },
    applicantId: {
        type: String
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
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
        type: String,
        required: [true, "Please provide the USN"],
    },
    fee: {
        type: Number,
        required: [true, "Please provide the fees"],
    },
    workshopName: {
        type: String,
        required: [true, "Please provide the event name"],
    },
    verified: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Workshop = mongoose.models.workshops || mongoose.model("workshops", workshopSchema);

export default Workshop;