import React from "react";

const projects = [
  {
    id: "brain-battle",
    title: "Brain Battle",
    subtitle: "Full Stack Quiz Application",
    date: "June 2025",
    tech: ["MongoDB", "Express", "React", "Node"],
    description:
      "Users take quizzes on topics like C, Java and MongoDB. Features contest creation, leaderboard and dark/light mode. Results stored in MongoDB.",
    image: "/images/projects/brain-battle.png",
    live: "#", // replace with live URL if available
    github: "https://github.com/vamsi6893/Quiz_app",
  },
  {
    id: "weather-app",
    title: "Weather App",
    subtitle: "Weather App with User Authentication",
    date: "Jan–Mar 2025",
    tech: ["React", "Node", "Express", "MongoDB", "JWT", "OpenWeather"],
    description:
      "Secure login with JWT, real-time weather by location using OpenWeather API and responsive UI built with React.",
    image: "/images/projects/weather-app.png",
    live: "#", // replace with live URL if available
    github: "https://github.com/your-github-username/weather-app-repo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white/3 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <div className="relative h-44 bg-gray-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/projects/placeholder.png";
                  }}
                />
                <span className="absolute top-3 left-3 px-2 py-1 text-xs rounded-md bg-black/40 text-white backdrop-blur-sm">
                  {p.date}
                </span>
              </div>

              <div className="p-4 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-sm text-indigo-200/85">{p.subtitle}</p>
                  </div>
                  <div className="text-sm text-gray-300 hidden sm:flex flex-col items-end">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 rounded bg-white/5 text-xs mb-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 text-sm mt-3 flex-1">{p.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.title}`}
                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${
                      p.live && p.live !== "#" ? "bg-indigo-600 text-white hover:bg-indigo-500" : "bg-white/5 text-gray-300 opacity-60 pointer-events-none"
                    }`}
                  >
                    View Project
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-white/6 hover:bg-white/10 transition text-gray-100"
                  >
                    {/* GitHub icon */}
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .297a12 12 0 00-3.793 23.4c.6.11.793-.26.793-.58v-2.04c-3.22.7-3.9-1.55-3.9-1.55-.546-1.38-1.333-1.75-1.333-1.75-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.83 2.8 1.3 3.483.995.108-.773.418-1.3.762-1.6-2.57-.29-5.27-1.285-5.27-5.72 0-1.263.45-2.295 1.187-3.103-.118-.29-.516-1.463.113-3.05 0 0 .967-.31 3.17 1.186a11.01 11.01 0 012.887-.388c.98.005 1.97.132 2.887.388 2.2-1.496 3.165-1.186 3.165-1.186.632 1.587.235 2.76.116 3.05.74.808 1.187 1.84 1.187 3.103 0 4.448-2.705 5.427-5.283 5.71.43.372.81 1.1.81 2.22v3.293c0 .32.19.7.8.58A12 12 0 0012 .297" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}