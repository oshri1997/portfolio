import Providers from "@/components/Providers";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Oshri | Fullstack Developer",
  description: "Oshri's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
