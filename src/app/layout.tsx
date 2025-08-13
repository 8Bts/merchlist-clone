import "./globals.css";
import { funnelDisplay, poppins, montserrat } from "@/lib/fonts";
import { HeroTopBar } from "@/components/layout/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Merchlist Clone",
  description: "Landing page clone of TheMerchList.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`min-h-full ${funnelDisplay.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body className="!h-auto min-h-screen flex flex-col">
        <HeroTopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
