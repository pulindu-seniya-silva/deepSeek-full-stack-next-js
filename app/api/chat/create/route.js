import connectDB from "../../../../configs/db";
import Chat from "../../../../models/chat"
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userId } = getAuth(req)

        if(!userId) {
            return NextResponse.json({success: false, message: "user not authenticated", })
        }
        //prepare the chat data to be saved in the database

        const chatData = {
            userId,
            messages: [],
            name: "New Chat",
        };

        //Connect to the database and create a new chat
        await connectDB();
        await Chat.create(chatData);

        return NextResponse.json({ suceess: true, message: "Chat created" })

    } catch (error) {
        return NextResponse.json({ suceess: false, error: error.message })
    }
}