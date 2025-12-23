import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ProjectPrivacyPolicy from "./pages/ProjectPrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectSlug" element={<Project />} />
      <Route
        path="/projects/:projectSlug/privacy-policy"
        element={<ProjectPrivacyPolicy />}
      />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
