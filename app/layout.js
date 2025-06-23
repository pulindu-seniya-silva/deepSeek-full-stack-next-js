import { Inter } from "next/font/google";
import '../styles/globals.css';
import ClerkProviderWrapper from '../components/ClerkProviderWrapper';

export const dynamic = "force-dynamic";

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
        <ClerkProviderWrapper>
          {children}
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
