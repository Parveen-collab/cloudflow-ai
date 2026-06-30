import "./globals.css";
import "@/src/styles/responsive.css";
import "@/src/styles/theme.css";
import "@/src/styles/accessibility.css";

import QueryProvider from "@/src/providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}