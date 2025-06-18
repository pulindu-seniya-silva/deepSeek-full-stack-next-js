export const metadata = {
    title : '',
    description: 'Welcome to my Next.js App',
}

export default function RootLayout ({ children }) {
    return (
        <html lang="en">
            <body
             className={``}
            >
                {children}
            </body>
        </html>
    )
}