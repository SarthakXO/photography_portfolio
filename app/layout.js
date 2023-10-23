import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Kapture by SarthakXO",
  description: "A photography portfolio by SarthakXO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
