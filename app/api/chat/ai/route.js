export const maxDuration = 60;
import OpenAI from "openai";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../../../../configs/db";
import Chat from "../../../../models/chat"

//initialize openAI client with DeepSeek API key and based URL
const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY
});

export async function POST(req) {
    try{
        const {userId} = getAuth(req)
        
        const{ chatId, prompt} = await req.json();

        if(!userId) {
            return NextResponse.json({
                   success: false,
                   message: "User not authenticated",
          });
         
        }

        //find chat document
        await connectDB()
        const data = await Chat.findOne({userId, _id: chatId})
        
        //Create a user message object
        const userPrompt = {
            role: "user",
            content : prompt,
            timestamp: Date.now()
        };

        data.messages.push(userPrompt);

        //call the Deepseek api

        const completion = await openai.chat.completions.create({
         messages: [{ role: "user", content: "You are a helpful assistant." }],
         model: "deepseek-chat",
         store: true,
    });

    const message = completion.choices[0].message;
    message.timestamp = Date.now()
    data.messages.push(message);
    data.save();

    return NextResponse.json({success: true, data: message})
  
    } catch (error) {
      return NextResponse.json({success: false, error: error.message })
  
    }

}

