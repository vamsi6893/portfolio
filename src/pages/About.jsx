// ...existing code...
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const handleContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // ref + useInView to animate both on entering and leaving viewport
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.15, once: false });

  return (
    <motion.section
      ref={ref}
      className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={sectionVariant}
    >
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        {/* Left: photo */}
        <motion.div variants={itemVariant} className="flex justify-center md:justify-start">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-2xl transform transition hover:scale-105 bg-gradient-to-tr from-indigo-600/10 to-pink-500/5">
            <img
              src="/images/profile.jpg"
              alt="Professional photo — Vamsi Ram Nandigam"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div variants={itemVariant}>
          <div className="bg-white/5 rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-3">About Me</h2>
            <p className="text-gray-300 mb-4">
              Seeking a challenging position in Cloud Computing and DevOps to leverage my expertise in AWS,
              Docker, and automation tools. Aiming to design and deploy scalable, secure, and cost-efficient cloud
              solutions while contributing to innovative projects that drive digital transformation.
            </p>

            <ul className="space-y-3 text-gray-200 mb-6">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                Vijayawada, Andhra Pradesh
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
                </svg>
                nvamsiram@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m0 0v2m0-2h2" />
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H7l-4-4V5a2 2 0 012-2h4" />
                </svg>
                +91 9502809277
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href="https://github.com/vamsi6893"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 hover:bg-white/6 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .297a12 12 0 00-3.793 23.4c.6.11.793-.26.793-.58v-2.04c-3.22.7-3.9-1.55-3.9-1.55-.546-1.38-1.333-1.75-1.333-1.75-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.83 2.8 1.3 3.483.995.108-.773.418-1.3.762-1.6-2.57-.29-5.27-1.285-5.27-5.72 0-1.263.45-2.295 1.187-3.103-.118-.29-.516-1.463.113-3.05 0 0 .967-.31 3.17 1.186a11.01 11.01 0 012.887-.388c.98.005 1.97.132 2.887.388 2.2-1.496 3.165-1.186 3.165-1.186.632 1.587.235 2.76.116 3.05.74.808 1.187 1.84 1.187 3.103 0 4.448-2.705 5.427-5.283 5.71.43.372.81 1.1.81 2.22v3.293c0 .32.19.7.8.58A12 12 0 0012 .297" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vamsiram-nandigam-114444292/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 hover:bg-white/6 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.8v1.7h.1c.53-1 1.83-2 3.77-2 4 0 4.74 2.63 4.74 6.05V20h-4v-5.2c0-1.24 0-2.84-1.73-2.84-1.73 0-1.99 1.36-1.99 2.75V20h-4V8z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow hover:scale-[1.02] transition"
              >
                Download Resume
              </a>

              <button
                onClick={handleContact}
                className="px-4 py-2 rounded-md border border-white/10 text-gray-100 hover:bg-white/5 transition"
              >
                Contact Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
// ...existing code...