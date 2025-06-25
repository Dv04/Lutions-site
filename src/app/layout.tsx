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
    // TODO: USER ACTION REQUIRED: Update this URL to your actual deployment domain.
    url: "https://your-domain.com",
    siteName: "Lutions Lab",
    images: [
      {
        // TODO: USER ACTION REQUIRED:
        // 1. Create an engaging Open Graph image (e.g., og-image.png) and place it in the 'public' folder.
        // 2. Update this URL to point to your actual Open Graph image (e.g., "https://your-domain.com/og-image.png").
        url: "https://your-domain.com/og-image.png",
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
    // TODO: USER ACTION REQUIRED: Add your Twitter handle here (e.g., creator: "@LutionsLab").
    // creator: "@yourhandle",
    // TODO: USER ACTION REQUIRED: Ensure the Twitter image URL points to your actual Open Graph image, same as above.
    images: ["https://your-domain.com/og-image.png"],
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
        className={`${inter.className} bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300`}
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
