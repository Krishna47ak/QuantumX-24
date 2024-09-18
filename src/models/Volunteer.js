import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    department: {
        type: String,
        required: [true, "Please provide a department"],
    },
    semester: {
        type: String,
        required: [true, "Please provide a semester"],
    },
    section: {
        type: String,
        required: [true, "Please provide a section"],
    },
    usn: {
        type: String,
        required: [true, "Please provide a usn"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        match: [/.+@.+\..+/, "Please provide a valid email address"]
    },
    phone: {
        type: Number,
        required: [true, "Please provide a phone number"],
    }
})

const Volunteer = mongoose.models.volunteers || mongoose.model("volunteers", volunteerSchema);

export default Volunteer;