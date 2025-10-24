import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Next.js e-commerce application with Redux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
                <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${quicksand.variable} font-quicksand antialiased max-w-[1920px]  mx-auto`}
      >
        <ReduxProvider>
          <Header />
          <div className=" flex flex-col">
            <ToastContainer position="top-right" autoClose={3000} />
            {children}
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
