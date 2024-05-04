import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shree Gokulesh Handicrafts",
  description: "Your one stop solution for wagha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Providers>
            <main className="light text-foreground bg-background">
              <Navbar />
              <div className="max-w-[1440px] px-2 m-auto">{children}</div>
              <Footer />
            </main>
          </Providers>
        </ApolloWrapper>
      </body>
    </html>
  );
}
