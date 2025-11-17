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

const certs = [
  {
    id: "mongodb-dba",
    title: "MongoDB Certified DBA",
    issuer: "MongoDB University",
    date: "March 2025",
    logo: "/images/mongodb.png",
    url: "https://learn.mongodb.com/c/F3BdDQa_QFS5cFgI340k_Q",
    pdf: "/certificates/mongodb-dba.pdf",
  },
  {
    id: "oci-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    logo: "/images/oracle.png",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6263664F73CE318D1303A45AC11377F9737E9F23EB8D879A71AF1CE751DB5767",
    pdf: "/certificates/oracle-oci-2025.pdf",
  },
  {
    id: "aviatrix-ace",
    title: "Aviatrix Certified Associate (ACE)",
    issuer: "Aviatrix",
    date: "2025",
    logo: "/images/aviatrix.png",
    url: "https://www.aviatrix.com/",
    pdf: "/certificates/aviatrix-ace.pdf",
  },
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariant}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {certs.map((c) => (
            <motion.article
              key={c.id}
              variants={itemVariant}
              className="group bg-white/3 rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={`${c.issuer} logo`}
                  className="w-16 h-16 object-contain transform group-hover:scale-105 transition"
                  onError={(e) => (e.currentTarget.src = "/images/certs/placeholder.png")}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-gray-300">{c.issuer} • {c.date}</p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow hover:opacity-95 transition text-sm whitespace-nowrap"
                >
                  View Credential
                </a>

                {c.pdf && (
                  <a
                    href={c.pdf}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-blue-500 text-blue-300 hover:bg-blue-500/10 transition text-sm whitespace-nowrap"
                  >
                    📄 Download PDF
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
// ...existing code...