import {Webhook} from "svix";
import connectDB from "../../configs/db";
import User from "../../models/User";
import { headers } from "next/headers";

export async function POST(req){
    const wh = new Webhook(process.env.SIGNING_SECRET)
    const headerPayload = await headers()
    const svixHeaders = {
        "svix-id": headerPayload.get("svix-id"),
        "svix-signature": headerPayload.get("svix-signature"),
    };

    
}
