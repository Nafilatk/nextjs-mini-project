import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "MiniShop",
  description: "Simple Next.js e-commerce demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#F9F9F9] text-[#2D2920]">
        <Navbar />
        <main className=" p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
