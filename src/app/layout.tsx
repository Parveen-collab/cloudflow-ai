import "./globals.css";
import "@/src/styles/responsive.css";
import "@/src/styles/theme.css";
import "@/src/styles/accessibility.css";

import QueryProvider from "@/src/providers/QueryProvider";
import ThemeToggle from "@/src/app/components/ui/ThemeToggle";

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
        <ThemeToggle />
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}