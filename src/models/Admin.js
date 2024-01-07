import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    }
})

const Admin = mongoose.models.admins || mongoose.model("admins", adminSchema);

export default Admin;