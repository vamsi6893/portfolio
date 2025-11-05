import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, msg: null });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (k) => (ev) => {
    setForm((s) => ({ ...s, [k]: ev.target.value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus({ loading: true, msg: null });

    try {
      // Option A — Formspree (no server). Replace YOUR_FORMSPREE_ID
    //   const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", Accept: "application/json" },
    //     body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    //   });
    //   if (res.ok) {
    //     setStatus({ loading: false, msg: "Message sent — thank you!" });
    //     setForm({ name: "", email: "", message: "" });
    //   } else {
    //     const json = await res.json().catch(() => ({}));
    //     setStatus({ loading: false, msg: json.error || "Failed to send message" });
    //   }

      // Option B — EmailJS (client-side). Uncomment & configure below if you prefer EmailJS:
      /*
      import emailjs from 'emailjs-com';
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { from_name: form.name, reply_to: form.email, message: form.message },
        'YOUR_USER_ID'
      );
      setStatus({ loading: false, msg: "Message sent — thank you!" });
      */
    } catch (err) {
      setStatus({ loading: false, msg: "Network error. Try again later." });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 items-start">
        {/* Form */}
        <div className="bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <p className="text-gray-300 mb-6">Send a message or reach out via email/GitHub/LinkedIn.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-200">Name</label>
              <input
                value={form.name}
                onChange={handleChange("name")}
                className={`w-full mt-1 px-4 py-3 rounded-md bg-white/5 border ${errors.name ? "border-red-400" : "border-white/10"} focus:outline-none`}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
              />
              {errors.name && <p id="err-name" className="text-xs text-red-300 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                className={`w-full mt-1 px-4 py-3 rounded-md bg-white/5 border ${errors.email ? "border-red-400" : "border-white/10"} focus:outline-none`}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && <p id="err-email" className="text-xs text-red-300 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm text-gray-200">Message</label>
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                rows={6}
                className={`w-full mt-1 px-4 py-3 rounded-md bg-white/5 border ${errors.message ? "border-red-400" : "border-white/10"} focus:outline-none`}
                placeholder="Write your message..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-msg" : undefined}
              />
              {errors.message && <p id="err-msg" className="text-xs text-red-300 mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status.loading}
                className="px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>

              <a
                href="mailto:nvamsiram@gmail.com"
                className="px-4 py-3 rounded-md border border-white/10 text-gray-100 hover:bg-white/5"
              >
                Email Me
              </a>
            </div>

            {status.msg && <p className="text-sm mt-2 text-green-300">{status.msg}</p>}
          </form>

          <div className="mt-6 border-t border-white/6 pt-4 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 hover:bg-white/5" href="https://github.com/vamsi6893/" target="_blank" rel="noreferrer">
              {/* GitHub icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .297a12 12 0 00-3.793 23.4c.6.11.793-.26.793-.58v-2.04c-3.22.7-3.9-1.55-3.9-1.55-.546-1.38-1.333-1.75-1.333-1.75-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.83 2.8 1.3 3.483.995.108-.773.418-1.3.762-1.6-2.57-.29-5.27-1.285-5.27-5.72 0-1.263.45-2.295 1.187-3.103-.118-.29-.516-1.463.113-3.05 0 0 .967-.31 3.17 1.186a11.01 11.01 0 012.887-.388c.98.005 1.97.132 2.887.388 2.2-1.496 3.165-1.186 3.165-1.186.632 1.587.235 2.76.116 3.05.74.808 1.187 1.84 1.187 3.103 0 4.448-2.705 5.427-5.283 5.71.43.372.81 1.1.81 2.22v3.293c0 .32.19.7.8.58A12 12 0 0012 .297" /></svg>
              GitHub
            </a>

            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 hover:bg-white/5" href="https://www.linkedin.com/in/vamsiram-nandigam-114444292/" target="_blank" rel="noreferrer">
              {/* LinkedIn icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.8v1.7h.1c.53-1 1.83-2 3.77-2 4 0 4.74 2.63 4.74 6.05V20h-4v-5.2c0-1.24 0-2.84-1.73-2.84-1.73 0-1.99 1.36-1.99 2.75V20h-4V8z" /></svg>
              LinkedIn
            </a>

            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 hover:bg-white/5" href="mailto:nvamsiram@gmail.com">
              {/* Email icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M2 4h20v16H2z" /></svg>
              nvamsiram@gmail.com
            </a>
          </div>
        </div>

        {/* Optional map / location */}
        <div className="order-first lg:order-last">
          <div className="h-80 rounded-xl overflow-hidden shadow-lg border border-white/6">
            {/* Replace src with your Google Maps embed or other map iframe */}
            <iframe
              title="Vijayawada location"
              src="https://www.google.com/maps?q=velivennu&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <p className="mt-3 text-sm text-gray-400">Location: velivennu, Andhra Pradesh</p>
        </div>
      </div>
    </section>
  );
}