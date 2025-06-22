"use client"

import {Inter} from "next/font/google"
import '../styles/globals.css'
import { ClerkProvider } from "@clerk/clerk-react";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

export default function RootLayout ({ children }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <html lang="en">
            <body
             className={`${inter.className} antialiased`}
            >
                {children}
            </body>
        </html>
        </ClerkProvider>
    )
}