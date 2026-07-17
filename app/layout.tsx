import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nderim Manxhuka — Portfolio",
  description: "The personal portfolio of Nderim Manxhuka.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nderim Manxhuka — Portfolio",
    description: "The personal portfolio of Nderim Manxhuka.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image", title: "Nderim Manxhuka — Portfolio", description: "The personal portfolio of Nderim Manxhuka." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
