import { NextResponse } from "next/server";
import { headers } from 'next/headers'
import Volunteer from "@/models/Volunteer";
import connectEventDB from "@/dbConfig/eventDBConfig";
import Admin from "@/models/Admin";
import { getDataFromToken } from "@/helpers/getDataFromToken";

let eventConnection

export async function POST(request) {
    try {
        eventConnection = await connectEventDB();
        const reqBody = await request.json()
        const { name, department, semester, section, usn, email, phone } = reqBody

        const existingVolunteer = await Volunteer.findOne({ usn });

        if (existingVolunteer) {
            return NextResponse.json({
                message: "Already registered",
                success: false
            }, { status: 403 })
        }

        if (process.env.DOMAIN != headers().get('origin')) {
            return NextResponse.json({
                message: "Unauthorized",
                success: false
            }, { status: 401 })
        }



        const volunteer = new Volunteer({
            name,
            department,
            semester,
            section,
            usn,
            email,
            phone
        })


        await volunteer.save()

        return NextResponse.json({
            message: "Registered successfully",
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

        const volunteers = await Volunteer.find({})

        return NextResponse.json({
            success: true,
            volunteers
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