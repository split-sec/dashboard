import { PropsWithChildren } from "react";
import Header from "./header";

import { Inter } from "next/font/google";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className={`${inter.className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}