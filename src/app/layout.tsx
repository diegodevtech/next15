import { Metadata } from "next";
import "./globals.css";
import ErrorWrapper from "./error-wrapper";

export const metadata: Metadata = {
  title: {
    default: "My Next Application",
    template: "%s | Top App"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 shadow-xl text-center">
          <p className="text-2xl font-bold tracking-wide">Header</p>
        </header>
        <ErrorWrapper>
          {children}
        </ErrorWrapper>
        <footer className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-6 shadow-2xl text-center mt-10">
          <p className="text-2xl font-bold tracking-wide">Footer</p>
        </footer>
      </body>
    </html>
  );
}
