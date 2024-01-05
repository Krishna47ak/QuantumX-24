import { NextResponse } from "next/server";
import Workshop from "@/models/Workshops";
import connectWorkshopDB from "@/dbConfig/workshopDBConfig";

let workshopConnection;

export async function POST(request) {
    try {
        workshopConnection = await connectWorkshopDB();
        const reqBody = await request.json()
        const { transacImg, applicantId, name, email, phone, college, usn, fee, workshopName } = reqBody

        if (applicantId) {
            const existingUser = await Workshop.findOne({ applicantId });

            if (existingUser) {
                return NextResponse.json({
                    message: "Invalid details",
                    success: false
                })
            } else if (applicantId?.length < 15) {
                return NextResponse.json({
                    message: "Invalid details",
                    success: false
                })
            }
        }

        const workshop = new Workshop({
            transacImg,
            applicantId,
            name,
            email,
            phone,
            college,
            usn,
            fee,
            workshopName
        })

        await workshop.save()

        return NextResponse.json({
            message: "Workshop created",
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

export async function GET() {
    try {
        workshopConnection = await connectWorkshopDB();
        const workshops = await Workshop.find({})

        return NextResponse.json({
            success: true,
            workshops
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