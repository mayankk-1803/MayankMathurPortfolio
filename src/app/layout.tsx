import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayank Mathur | Software Developer",
  description:
    "Full Stack & React Native Developer specializing in FinTech, AI APIs, Cloud & scalable web architectures. Based in India.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Mayank Mathur",
    "Software Developer",
    "Full Stack Developer",
    "React Native",
    "Next.js",
    "FinTech",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Mayank Mathur", url: "https://github.com/mayankk-1803" }],
  creator: "Mayank Mathur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://irecharge.in",
    title: "Mayank Mathur — Software Developer Portfolio",
    description:
      "Minimalist editorial software developer portfolio. Scalable web and mobile applications, production-ready backend systems, and modern digital experiences.",
    siteName: "Mayank Mathur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Mathur — Software Developer",
    description: "Full Stack & React Native Developer — FinTech, AI, Cloud.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050505]">
      <body className="bg-[#050505] text-[#090909] antialiased selection:bg-[#090909] selection:text-white">
        {children}
      </body>
    </html>
  );
}
