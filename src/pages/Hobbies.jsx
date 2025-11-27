import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hobbies() {
  const hobbies = [
    { icon: "🎵", title: "Listening to Music" },
    { icon: "🎮", title: "Gaming" },
    { icon: "🏏", title: "Cricket / Sports" },
    { icon: "🌍", title: "Traveling" },
    { icon: "💻", title: "Coding Challenges" },
    { icon: "🏋️‍♂️", title: "Gym / Fitness" },
  ];

  return (
    <motion.section
      id="hobbies"
      className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariant}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Hobbies & Interests</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, idx) => (
            <motion.article
              key={idx}
              variants={itemVariant}
              className="group bg-white/3 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-125 transition duration-300">
                {hobby.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{hobby.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
// ...existing code...