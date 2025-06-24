"use client"; // Must mark as client component

import { ClerkProvider } from "@clerk/nextjs";

export default function ClerkProviderWrapper({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      // Optional: Add appearance customization
      appearance={{
        variables: {
          colorPrimary: "#4f46e5", // Example: Indigo-600
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}