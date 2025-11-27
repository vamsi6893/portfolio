// ...existing code...
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const handleContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center bg-animated overflow-hidden"
    >
      {/* decorative particles */}
      <div className="pointer-events-none absolute inset-0">
        <motion.span
          variants={itemVariants}
          className="particle left-5 top-10 w-24 h-24 bg-indigo-500/20"
        />
        <motion.span
          variants={itemVariants}
          className="particle right-10 top-20 w-16 h-16 bg-pink-400/20"
        />
        <motion.span
          variants={itemVariants}
          className="particle left-1/3 bottom-10 w-28 h-28 bg-yellow-400/15"
        />
        <motion.span
          variants={itemVariants}
          className="particle right-1/4 bottom-28 w-20 h-20 bg-cyan-400/15"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div variants={itemVariants} className="text-center lg:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="inline-block name-gradient">Vamsi Ram Nandigam</span>
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200">
              <span className="inline-block typing-wrapper">
                <span className="typing">
                  Aspiring Cloud & DevOps Engineer | MERN Stack Developer
                </span>
              </span>
            </h2>

            <p className="mt-4 text-gray-300">
              Designing scalable cloud solutions and building full-stack web apps.
            </p>

            {/* 💠 Added Your Objective Section Here */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-gray-300 leading-relaxed"
            >
              Seeking a challenging position in Cloud Computing and DevOps to leverage my
              expertise in AWS, Docker, and automation tools. Aiming to design and deploy
              scalable, secure, and cost-efficient cloud solutions while contributing to
              innovative projects that drive digital transformation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg hover:scale-[1.02] transition"
              >
                View Resume
              </a>

              <button
                onClick={handleContact}
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-700 text-gray-100 hover:bg-white/5 transition"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
          >
            <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl backdrop-blur-sm">
              <img
                src="/images/profile.jpg"
                alt="Vamsi Ram Nandigam"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* subtle glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
    </motion.main>
  );
}
