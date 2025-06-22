import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./(components)/layout/Header";
import Footer from "./(components)/layout/Footer";
import GradientGlow from "./(components)/common/GradientGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lutions Lab - Advancing AI and ML Frontiers",
  description:
    "Lutions Lab offers Lutions Predictor, a no-code GUI tool that empowers researchers and professionals to leverage machine learning for data analysis and prediction without writing any code.",
  openGraph: {
    title: "Lutions Lab - Advancing AI and ML Frontiers",
    description: "No-code machine learning for everyone.",
    url: "https://your-domain.com", // TODO: Update with your domain
    siteName: "Lutions Lab",
    images: [
      {
        url: "https://your-domain.com/og-image.png", // TODO: Update with your OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lutions Lab - Advancing AI and ML Frontiers",
    description: "No-code machine learning for everyone.",
    // TODO: Add your Twitter handle: creator: "@yourhandle",
    images: ["https://your-domain.com/og-image.png"], // TODO: Update with your OG image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative isolate min-h-screen flex flex-col">
            <GradientGlow />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
