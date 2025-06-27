import { Inter } from "next/font/google";
import '../styles/globals.css';
import '../styles/prism.css';
import { ClerkProvider } from '@clerk/nextjs'; // Import directly
import { AppContextProvider } from "../context/AppContext";
import { Toaster } from "react-hot-toast";

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
          <Toaster toastOptions={
            {
              success: {style: { background: "black", color: "white"}},
              error: {style: {background: "black", color: "white"}}
            }
          }/>
          {children}
          </AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}