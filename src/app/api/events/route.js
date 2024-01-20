import { NextResponse } from "next/server";
import { headers } from 'next/headers'
import Event from "@/models/Events";
import Admin from "@/models/Admin";
import connectEventDB from "@/dbConfig/eventDBConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { sendEmail } from "@/helpers/mailer";

let eventConnection

export async function POST(request) {
    try {
        eventConnection = await connectEventDB();
        const reqBody = await request.json()
        const { teamName, discord, transacImg, applicantId, leader, email, phone, college, usn, teamSize, members, weightClass, fee, eventName } = reqBody

        if (applicantId) {
            const existingUser = await Event.findOne({ applicantId });

            if (existingUser) {
                return NextResponse.json({
                    message: "Invalid details",
                    success: false
                }, { status: 400 })
            }
        }

        if (process.env.DOMAIN != headers().get('origin')) {
            return NextResponse.json({
                message: "Unauthorized",
                success: false
            }, { status: 401 })
        }

        const existingUser = await Event.find({ usn });

        for (let i = 0; i < existingUser?.length; i++) {
            if (existingUser[i]?.eventName === eventName) {
                return NextResponse.json({
                    message: "Invalid details",
                    success: false
                }, { status: 400 })
            }
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

        await sendEmail({ email, name: leader, eventName })

        return NextResponse.json({
            message: "Event created",
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

export async function GET(request) {
    try {
        eventConnection = await connectEventDB();
        const userId = await getDataFromToken(request);

        const user = await Admin.findOne({ _id: userId }).select("-password");

        if (!user) {
            return NextResponse.json({
                message: "Unauthorized",
                success: false
            }, { status: 401 })
        }

        const events = await Event.find({}).select("-transacImg")
        // const events = await Event.find({ verified: false })

        return NextResponse.json({
            success: true,
            events
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