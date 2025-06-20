import {Inter} from "next/font/google"

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})


export const metadata = {
    title : "Deepseek - GreatStack",
    description: "Full Stack Project",
};

export default function RootLayout ({ children }) {
    return (
        <html lang="en">
            <body
             className={`${inter.className} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}