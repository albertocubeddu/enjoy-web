// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Enjoy",
//   description: "Enjoy Admin Portal",
// };

import SideNav from "@/app/ui/sidenav";
import AuthContextProvider from "../store/auth-context.js";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased text-on-surface`}>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
            <div className="w-full flex-none md:w-64 text-on-medium">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </body>
      </html>
    </AuthContextProvider>
  );
}
