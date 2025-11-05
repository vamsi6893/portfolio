// ...existing code...
import React from "react";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <section className="py-16 bg-slate-900 text-gray-100 flex flex-col items-center gap-4">
      <p className="text-sm text-gray-300">© {year} Vamsi Ram Nandigam. All rights reserved.</p>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/vamsi6893"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/3 hover:bg-white/6 transition transform hover:scale-105"
        >
          <svg className="w-5 h-5 text-gray-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .297a12 12 0 00-3.793 23.4c.6.11.793-.26.793-.58v-2.04c-3.22.7-3.9-1.55-3.9-1.55-.546-1.38-1.333-1.75-1.333-1.75-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.83 2.8 1.3 3.483.995.108-.773.418-1.3.762-1.6-2.57-.29-5.27-1.285-5.27-5.72 0-1.263.45-2.295 1.187-3.103-.118-.29-.516-1.463.113-3.05 0 0 .967-.31 3.17 1.186a11.01 11.01 0 012.887-.388c.98.005 1.97.132 2.887.388 2.2-1.496 3.165-1.186 3.165-1.186.632 1.587.235 2.76.116 3.05.74.808 1.187 1.84 1.187 3.103 0 4.448-2.705 5.427-5.283 5.71.43.372.81 1.1.81 2.22v3.293c0 .32.19.7.8.58A12 12 0 0012 .297" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/vamsiram-nandigam-114444292/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/3 hover:bg-white/6 transition transform hover:scale-105"
        >
          <svg className="w-5 h-5 text-gray-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.8v1.7h.1c.53-1 1.83-2 3.77-2 4 0 4.74 2.63 4.74 6.05V20h-4v-5.2c0-1.24 0-2.84-1.73-2.84-1.73 0-1.99 1.36-1.99 2.75V20h-4V8z" />
          </svg>
        </a>

        <a
          href="mailto:nvamsiram@gmail.com"
          aria-label="Email"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/3 hover:bg-white/6 transition transform hover:scale-105"
        >
          <svg className="w-5 h-5 text-gray-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M2 4h20v16H2z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
// ...existing code...