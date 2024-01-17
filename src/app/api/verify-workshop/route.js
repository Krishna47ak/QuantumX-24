import { NextResponse } from "next/server";
import connectWorkshopDB from "@/dbConfig/workshopDBConfig";
import Workshop from "@/models/Workshops";


let workshopConnection

export async function POST(request) {
    try {
        workshopConnection = await connectWorkshopDB();
        const reqBody = await request.json()
        const { applicantId } = reqBody

        const existingUser = await Workshop.findOne({ applicantId });

        existingUser.verified = true

        await existingUser.save()

        return NextResponse.json({
            success: true
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        if (workshopConnection) {
            await workshopConnection.disconnect();
            console.log("Workshop MongoDB Disconnected");
        }
    }
}