import { NextResponse } from "next/server";
import Event from "@/models/Events";
import connectEventDB from "@/dbConfig/eventDBConfig";

connectEventDB();

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { teamName, discord, transacImg, applicantId, leader, email, phone, college, usn, teamSize, members, weightClass, fee, eventName } = reqBody

        const existingUser = await Event.findOne({ applicantId });

        if (existingUser) {
            return NextResponse.json({
                message: "Applicant Id already exist",
                success: false
            })
        }

        const event = new Event({
            teamName,
            discord,
            transacImg,
            applicantId,
            leader,
            email,
            phone,
            college,
            usn,
            teamSize,
            members,
            weightClass,
            fee,
            eventName
        })


        await event.save()

        return NextResponse.json({
            message: "Event created",
            success: true,
            event
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET() {
    try {
        const events = await Event.find({})


        return NextResponse.json({
            success: true,
            events
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}