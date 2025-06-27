export const maxDuration = 60;
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../../../../configs/db";
import Chat from "../../../../models/chat";

export async function POST(req) {
    try {
        const { userId } = getAuth(req);
        const { chatId, prompt } = await req.json();

        if (!userId) {
            return NextResponse.json({
                success: false,
                message: "User not authenticated",
            });
        }

        await connectDB();
        const data = await Chat.findOne({ userId, _id: chatId });

        if (!data) {
            return NextResponse.json({
                success: false,
                message: "Chat not found",
            });
        }

        const userPrompt = {
            role: "user",
            content: prompt,
            timestamp: Date.now(),
        };

        data.messages.push(userPrompt);

        // 🌟 Gemini API call
        const geminiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt,
                                },
                            ],
                        },
                    ],
                }),
            }
        );

        const geminiData = await geminiResponse.json();

        if (!geminiData || !geminiData.candidates || geminiData.candidates.length === 0) {
            throw new Error("No response from Gemini API");
        }

        // Ensure content is a string to satisfy Mongoose schema
        const aiText = geminiData.candidates[0]?.content?.parts?.[0]?.text || "No response.";

        console.log("AI response text:", aiText);

        const assistantMessage = {
            role: "assistant",
            content: typeof aiText === "string" ? aiText : JSON.stringify(aiText),
            timestamp: Date.now(),
        };

        data.messages.push(assistantMessage);
        await data.save();

        return NextResponse.json({ success: true, data: assistantMessage });

        /*
        // If you have a DeepSeek premium API key, uncomment below and comment above Gemini API block to switch.

        // import OpenAI from "openai";
        // const openai = new OpenAI({
        //     baseURL: 'https://api.deepseek.com',
        //     apiKey: process.env.DEEPSEEK_API_KEY
        // });

        // const completion = await openai.chat.completions.create({
        //     messages: [{ role: "user", content: prompt }],
        //     model: "deepseek-chat",
        //     store: true,
        // });

        // const message = completion.choices[0].message;
        // message.timestamp = Date.now();
        // data.messages.push(message);
        // await data.save();

        // return NextResponse.json({ success: true, data: message });
        */

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message,
        });
    }
}
