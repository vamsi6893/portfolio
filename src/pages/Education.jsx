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

export default function Education() {
  const items = [
    {
      icon: "🎓",
      title: "KL University",
      years: "2023 – 2027",
      degree: "B.Tech, Guntur",
      note: "GPA: 9.14",
    },
    {
      icon: "🏫",
      title: "Sasi New Gen Junior College",
      years: "2021 – 2023",
      degree: "Intermediate (MPC), Velivennu",
      note: "Score: 850 / 1000",
    },
    {
      icon: "🏫",
      title: "Sasi English Medium High School",
      years: "2020 – 2021",
      degree: "SSC, Velivennu",
      note: "Score: 598 / 600",
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariant}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>

        {/* Vertical timeline on md+, stacked cards on small screens */}
        <div className="relative">
          {/* vertical line (visible on md+) */}
          <div className="hidden md:block absolute left-12 top-6 bottom-0 w-px bg-white/10"></div>

          <div className="space-y-6">
            {items.map((it, idx) => (
              <motion.article
                key={idx}
                variants={itemVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative md:pl-24 flex flex-col md:flex-row md:items-start bg-white/3 rounded-lg p-5 md:p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                {/* dot & year (for timeline) */}
                <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 flex items-start gap-4 md:flex-col md:items-center">
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 items-center justify-center text-lg shadow-lg">
                    <span aria-hidden className="text-xl">
                      {it.icon}
                    </span>
                  </div>

                  {/* clearer year label (centered vertically) */}
                  <div className="hidden md:flex flex-col items-center text-center">
                    <span className="text-xs text-indigo-300 uppercase tracking-wider">Years</span>
                    <time className="text-sm text-gray-300 font-medium mt-1">{it.years}</time>
                  </div>

                  {/* show years on small screens above content */}
                  <div className="md:hidden text-sm text-gray-300 self-start mb-2">{it.years}</div>
                </div>

                {/* content */}
                <div className="ml-0 md:ml-6">
                  <h3 className="text-xl font-semibold text-white">{it.title}</h3>
                  <p className="text-sm text-indigo-200/80 mb-2">{it.degree}</p>
                  <p className="text-sm text-gray-300">{it.note}</p>
                </div>

                {/* small badge on right for large screens */}
                <div className="mt-4 md:mt-0 md:ml-auto">
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/5 text-gray-200 border border-white/6">
                    {idx === 0 ? "Current" : "Completed"}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}