import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./styles/globals.scss";
import { Navbar } from "./_components/Navbar";
import { Logo } from "./_components/Logo";
import classNames from "classnames";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKOLZ - intro",
  description: "Portfolio of SKOLZ, a frontend web developer specializing in building modern, responsive, and high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(jost.variable, "body")}>
        <Logo />
        <main className="main">
          {children}
        </main>
        <div className="navbarWrapper">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
