import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, msg: null });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5be5e05f-a360-47ed-9647-3819762f48ac", 
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus({ loading: false, msg: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          loading: false,
          msg: "Failed to send message. Try again later.",
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        msg: "Network error. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-24 bg-slate-900 text-gray-100">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 items-start">

        <div className="bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <p className="text-gray-300 mb-6">Send a message or reach out via email/GitHub/LinkedIn.</p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-sm text-gray-200">Name</label>
              <input
                value={form.name}
                onChange={handleChange("name")}
                className={`w-full mt-1 px-4 py-3 rounded-md bg-white/5 border ${
                  errors.name ? "border-red-400" : "border-white/10"
                } focus:outline-none`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-red-300 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                className={`w-full mt-1 px-4 py-3 rounded-md bg-white/5 border ${
                  errors.email ? "border-red-400" : "border-white/10"
                } focus:outline-none`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-300 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm text-gray-200">Message</label>
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                rows={6}
                className={`w-full mt-1 px-4 py-3 rounded-md bg-white/5 border ${
                  errors.message ? "border-red-400" : "border-white/10"
                } focus:outline-none`}
                placeholder="Write your message..."
              />
              {errors.message && <p className="text-xs text-red-300 mt-1">{errors.message}</p>}
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
        </div>

        <div className="order-first lg:order-last">
          <div className="h-80 rounded-xl overflow-hidden shadow-lg border border-white/6">
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
