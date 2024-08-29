import dbclient from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {

    const body = await req.json();

    const client = await dbclient;
    const db = await client.db('caredoctore')
    const collection = await db.collection("user")
    const exist = await collection.findOne({ email: body.email })

    // use solting
    const hashPassword = bcrypt.hashSync(body.password, 10);
    if (exist) {
        return Response.json({ message: "Email altady existing" }, { status: 200 })
    }
    collection.insertOne({ ...body, password: hashPassword })
    console.log(body);
    return NextResponse.json({
        "message": "ok"
    })
}



// const client = await dbclient;
// const db = await client.db('caredoctore')
// const calection = await db.collection('user')