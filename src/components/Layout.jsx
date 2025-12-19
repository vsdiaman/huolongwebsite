import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-brandCream text-brandBlack">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
