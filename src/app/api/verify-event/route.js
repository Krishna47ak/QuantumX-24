import { NextResponse } from "next/server";
import Event from "@/models/Events";
import connectEventDB from "@/dbConfig/eventDBConfig";


let eventConnection

export async function POST(request) {
    try {
        eventConnection = await connectEventDB();
        const reqBody = await request.json()
        const { applicantId } = reqBody

        const existingUser = await Event.findOne({ applicantId });

        existingUser.verified = true

        await existingUser.save()

        return NextResponse.json({
            success: true
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        if (eventConnection) {
            await eventConnection.disconnect();
            console.log("Event MongoDB Disconnected");
        }
    }
}