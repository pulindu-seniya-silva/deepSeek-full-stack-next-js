"use client";

import '../styles/globals.css';
import { ClerkProvider } from "@clerk/clerk-react";

export default function ClerkProviderWrapper({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}
