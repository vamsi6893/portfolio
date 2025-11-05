// ...existing code...
import React from "react";

const certs = [
  {
    id: "mongodb-dba",
    title: "MongoDB Certified DBA",
    issuer: "MongoDB University",
    date: "March 2025",
    logo: "/images/mongodb.png",
    url: "https://learn.mongodb.com/c/F3BdDQa_QFS5cFgI340k_Q",
  },
  {
    id: "oci-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    logo: "/images/oracle.png",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6263664F73CE318D1303A45AC11377F9737E9F23EB8D879A71AF1CE751DB5767",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {certs.map((c) => (
            <article
              key={c.id}
              className="group bg-white/3 rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition"
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

              <div className="flex-shrink-0">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow hover:opacity-95 transition text-sm"
                >
                  View Credential
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
// ...existing code...