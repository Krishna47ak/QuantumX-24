import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a name"],
    },
    department: {
        type: String,
        required: [true, "Please provide a department"],
    },
    role: {
        type: String,
        required: [true, "Please provide a role"],
    },
    semester: {
        type: String,
        required: [true, "Please provide a semester"],
    },
    section: {
        type: String,
        trim: true,
        required: [true, "Please provide a section"],
    },
    usn: {
        type: String,
        trim: true,
        required: [true, "Please provide a usn"],
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Please provide a email"],
        match: [/.+@.+\..+/, "Please provide a valid email address"]
    },
    phone: {
        type: Number,
        trim: true,
        required: [true, "Please provide a phone number"],
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Volunteer = mongoose.models.volunteers || mongoose.model("volunteers", volunteerSchema);

export default Volunteer;