import { Inter } from "next/font/google";
import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs'; // Import directly
import { AppContextProvider } from "../context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deepseek - GreatStack",
  description: "Full Stack Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Use ClerkProvider directly (Next.js handles SSR automatically) */}
        <ClerkProvider>
          <AppContextProvider>
          {children}
          </AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}