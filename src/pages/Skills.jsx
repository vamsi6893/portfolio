import React, { useEffect, useState } from "react";

const skillColumns = [
  {
    title: "Programming & Web",
    skills: [
      { name: "JavaScript", pct: 90, color: "#F59E0B" },
      { name: "Java", pct: 80, color: "#2563EB" },
      { name: "C", pct: 75, color: "#06B6D4" },
      { name: "HTML", pct: 95, color: "#E44D26" },
      { name: "CSS", pct: 92, color: "#0EA5A4" },
      { name: "React", pct: 88, color: "#61DAFB" },
    ],
  },
  {
    title: "DB / Cloud / DevOps",
    skills: [
      { name: "Node.js / Express", pct: 85, color: "#8B5CF6" },
      { name: "MongoDB", pct: 82, color: "#13A10E" },
      { name: "SQL", pct: 78, color: "#0EA5A4" },
      { name: "AWS", pct: 80, color: "#FF9900" },
      { name: "Docker", pct: 75, color: "#2496ED" },
      { name: "Git / GitHub", pct: 90, color: "#333" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // animate bars after mount
    const t = setTimeout(() => setActive(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="skills" className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <p className="text-gray-300 mb-8 max-w-3xl">
          Technical proficiency across programming languages, web technologies, databases and cloud & DevOps tools.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skillColumns.map((col) => (
            <div key={col.title} className="space-y-6">
              <h3 className="text-xl font-semibold">{col.title}</h3>

              <div className="space-y-4">
                {col.skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-4 rounded-lg bg-white/3 hover:bg-white/5 transition shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {/* simple icon circle */}
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                          style={{ background: s.color, color: "#fff" }}
                          aria-hidden
                        >
                          {s.name.split(" ").map((t) => t[0]).slice(0,2).join("")}
                        </span>
                        <span className="font-medium">{s.name}</span>
                      </div>

                      <span className="text-sm text-gray-300">{s.pct}%</span>
                    </div>

                    <div
                      className="w-full bg-white/6 rounded-full h-3 overflow-hidden"
                      role="progressbar"
                      aria-valuenow={s.pct}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: active ? `${s.pct}%` : "0%",
                          background: `linear-gradient(90deg, ${s.color} 0%, ${shadeColor(
                            s.color,
                            -15
                          )} 100%)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* small helper to slightly darken color for gradient — kept in JS to avoid extra CSS */
function shadeColor(hex, percent) {
  // hex in format #rrggbb
  const num = parseInt(hex.replace("#", ""), 16);
  const r = (num >> 16) + Math.round((percent / 100) * 255);
  const g = ((num >> 8) & 0x00ff) + Math.round((percent / 100) * 255);
  const b = (num & 0x0000ff) + Math.round((percent / 100) * 255);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  return (
    "#" +
    (clamp(r).toString(16).padStart(2, "0")) +
    (clamp(g).toString(16).padStart(2, "0")) +
    (clamp(b).toString(16).padStart(2, "0"))
  );
}