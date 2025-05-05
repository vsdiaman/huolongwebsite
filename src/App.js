import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {" "}
        {/* Corpo da página */}
        <header className="fixed top-0 left-0 w-full bg-white border-b border-huolongRed shadow-md z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-huolongRed text-lg font-pixel">
              <Link
                to="/"
                className="text-black hover:text-huolongRed transition"
              >
                Huolong
              </Link>
            </h1>
            <nav className="space-x-6">
              <Link
                to="/about"
                className="text-black hover:text-huolongRed transition"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-huolongRed transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow pt-24 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
