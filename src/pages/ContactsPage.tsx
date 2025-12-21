import { useState, type FormEvent } from "react";
import { GoogleMap } from "../components/GoogleMap";
import { FaMapPin } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { BsAlarm } from "react-icons/bs";

export default function ContactsPage() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Тут можна додати відправку на сервер

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f9f3e9] pt-30 text-[#4f2d20]">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest ">Get in touch</p>
          <h1 className="mt-2 text-4xl font-bold  md:text-5xl">Contact Us</h1>
          <p className="mt-4 ">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium "
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
                className="w-full rounded-xl bg-[#4f2d20] text-[#f9f3e9] border-amber-200  py-3 font-semibold  transition hover:opacity-90"
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

          <div className="space-y-6">
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold ">Visit Us</h3>
              <div className="space-y-4 ">
                <div className="flex gap-3">
                  <span className="text-xl">
                    <FaMapPin className="text-pink-600" />
                  </span>
                  <div>
                    <p className="font-medium ">Address</p>
                    <p>Kyiv, Ukraine 01054</p>
                    <p>COFFEE EXPLORER</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">
                    <IoMailUnreadOutline />
                  </span>
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
                  <span className="text-xl">
                    <FaPhone className="text-pink-600" />
                  </span>
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
                  <span className="text-xl">
                    <BsAlarm />
                  </span>
                  <div>
                    <p className="font-medium text-4f2d20">Working Hours</p>
                    <p>Mon-Fri: 8:00 - 18:00</p>
                    <p>Sat-Sun: 9:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="map"
              className="overflow-hidden rounded-2xl border border-amber-100 bg-amber-50 shadow-sm"
            >
              <div className="flex h-64 items-center justify-center text-neutral-500">
                <GoogleMap apiKey={apiKey} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
