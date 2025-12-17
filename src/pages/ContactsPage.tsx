import { useState, type FormEvent } from "react";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Тут можна додати відправку на сервер
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-fefbf3 pt-30">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            Get in touch
          </p>
          <h1 className="mt-2 text-4xl font-bold text-4f2d20 md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-neutral-700">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-4f2d20">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-4f2d20"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-4f2d20 outline-none transition focus:border-4f2d20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-4f2d20"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-4f2d20 outline-none transition focus:border-4f2d20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-4f2d20"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-4f2d20 outline-none transition focus:border-4f2d20"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-4f2d20 py-3 font-semibold text-fefbf3 transition hover:opacity-90"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-600">
                  ✓ Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-4f2d20">
                Visit Us
              </h3>
              <div className="space-y-4 text-neutral-700">
                <div className="flex gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-medium text-4f2d20">Address</p>
                    <p>Kyiv, Ukraine 01054</p>
                    <p>COFFEE EXPLORER</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-medium text-4f2d20">Email</p>
                    <a
                      href="mailto:hello@coffeeexplorer.com"
                      className="text-amber-600 hover:underline"
                    >
                      hello@coffeeexplorer.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium text-4f2d20">Phone</p>
                    <a
                      href="tel:+380123456789"
                      className="text-amber-600 hover:underline"
                    >
                      +380 12 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="font-medium text-4f2d20">Working Hours</p>
                    <p>Mon-Fri: 8:00 - 18:00</p>
                    <p>Sat-Sun: 9:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-amber-100 bg-amber-50 shadow-sm">
              <div className="flex h-64 items-center justify-center text-neutral-500">
                {/* Можна додати Google Maps iframe або Leaflet */}
                <p className="text-sm">🗺️ Map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
