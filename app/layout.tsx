import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LivePopup from "@/components/LiveCenterPopup";


export const metadata = {
  title: "Vardhan Photo Factory",
  description: "Cinematic luxury photography studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <WhatsAppFloat />

        <Analytics />

        <LivePopup />


      </body>
    </html>
  );
}
