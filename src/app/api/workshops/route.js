import { NextResponse } from "next/server";
import Workshop from "@/models/Workshops";
import connectWorkshopDB from "@/dbConfig/workshopDBConfig";

connectWorkshopDB()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { transacImg, applicantId, name, email, phone, college, usn, fee, workshopName } = reqBody

        const existingUser = await Workshop.findOne({ applicantId });

        if (existingUser) {
            return NextResponse.json({
                message: "Applicant Id already exist",
                success: false
            })
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
            success: true,
            workshop
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET() {
    try {
        const workshops = await Workshop.find({})


        return NextResponse.json({
            success: true,
            workshops
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}