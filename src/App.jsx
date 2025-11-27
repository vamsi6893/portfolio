// ...existing code...
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Hobbies from "./pages/Hobbies";
import "./index.css";

function NavLink({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = `#${to}`;
  };
  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className="text-gray-200 hover:text-white px-3 py-2 rounded-md transition"
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 antialiased">
      <header className="fixed top-4 left-0 right-0 z-50 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/3 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-3">
            <img
              src="/images/profile.jpg"
              alt="Vamsi"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
            />
            <span className="font-semibold">Vamsi Ram Nandigam</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="education">Education</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="certifications">Certifications</NavLink>
            <NavLink to="hobbies">Hobbies</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <a
              href="/resume.pdf"
              download
              className="ml-3 inline-flex items-center px-3 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-md shadow"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden">
            <details className="text-gray-200">
              <summary className="cursor-pointer px-3 py-2">Menu</summary>
              <div className="flex flex-col bg-white/5 rounded-md mt-2 p-2">
                <NavLink to="home">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="education">Education</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="skills">Skills</NavLink>
                <NavLink to="certifications">Certifications</NavLink>
                <NavLink to="hobbies">Hobbies</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <a
                  href="/resume.pdf"
                  download
                  className="text-gray-200 px-3 py-2 rounded-md hover:bg-white/3"
                >
                  Resume
                </a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="home" className="pt-24">
        <Home />

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="education" className="scroll-mt-20">
          <Education />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="certifications" className="scroll-mt-20">
          <Certifications />
        </section>

        <section id="hobbies" className="scroll-mt-20">
          <Hobbies />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* custom cursor (renders only on fine-pointer devices) */}
      <Cursor />
    </div>
  );
}
// ...existing code...