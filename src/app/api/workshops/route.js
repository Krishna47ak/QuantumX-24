import { NextResponse } from "next/server";
import { headers } from "next/headers";
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
                }, { status: 400 })
            }
        }

        if (process.env.DOMAIN != headers().get('origin')) {
            return NextResponse.json({
                message: "Unauthorized",
                success: false
            }, { status: 401 })
        }

        const existingUser = await Workshop.find({ usn });

        for (let i = 0; i < existingUser?.length; i++) {
            if (existingUser[i]?.workshopName === workshopName) {
                return NextResponse.json({
                    message: "Invalid details",
                    success: false
                }, { status: 400 })
            }
        }

        // const registeredUsers = await Workshop.find({ workshopName });

        // if (registeredUsers?.length >= 39) {
        //     return NextResponse.json({
        //         message: "Registration full",
        //         success: false
        //     }, { status: 504 })
        // }

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

        if (`${process.env.DOMAIN}/admin-qx/workshops` != headers().get('referer')) {
            return NextResponse.json({
                message: "Unauthorized",
                success: false
            }, { status: 401 })
        }

        // const workshops = await Workshop.find({ verified: false })
        const workshops = await Workshop.find({}).select("-transacImg")

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