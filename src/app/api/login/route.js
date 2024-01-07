import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "@/models/Admin";
import connectEventDB from "@/dbConfig/eventDBConfig";

let eventConnection;

export async function POST(request) {
    try {
        eventConnection = await connectEventDB();

        const reqBody = await request.json()
        const { username, password } = reqBody;

        const admin = await Admin.findOne({ username })
        if (!admin) {
            return NextResponse.json({ message: "Admin does not exist", success: false }, { status: 400 })
        }

        const validPassword = await bcryptjs.compare(password, admin.password)
        if (!validPassword) {
            return NextResponse.json({ message: "Invalid username or password", success: false }, { status: 400 })
        }

        const tokenData = {
            id: admin._id,
            username: admin.username
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "3d" })

        const response = NextResponse.json({
            message: "Login successful",
            success: true
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        
        return response;

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        if (eventConnection) {
            await eventConnection.disconnect();
            console.log("Event MongoDB Disconnected");
        }
    }
}