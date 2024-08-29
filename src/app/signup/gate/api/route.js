
import dbclient from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(req) {

    const client = await dbclient;
    const db = await client.db('caredoctore')
    const calection = await db.collection('user')

    const finddata = await calection.find({}).toArray()


    return NextResponse.json(finddata);
}
