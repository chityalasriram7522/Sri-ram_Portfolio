import { useState } from "react";
import { motion } from "motion/react";
import bolt from "@/assets/deco-bolt.png";
import flower from "@/assets/deco-flower-purple.png";

const float = { animate: { y: [0, -14, 0] } };

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "website"}`);
    window.location.href = `mailto:chityalasriram@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-4 py-28 text-black">
      {/* floating 3D decorations */}
      <motion.img
        src={bolt}
        alt=""
        aria-hidden
        loading="lazy"
        width={512}
        height={512}
        variants={float}
        animate="animate"
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-2 top-6 h-24 w-24 select-none sm:right-12 sm:h-36 sm:w-36"
      />
      <motion.img
        src={flower}
        alt=""
        aria-hidden
        loading="lazy"
        width={512}
        height={512}
        variants={float}
        animate="animate"
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="pointer-events-none absolute bottom-10 left-2 h-20 w-20 select-none sm:left-10 sm:h-28 sm:w-28"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Left: headline */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-black-display uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)" }}
          >
            Let's
            <br />
            Get In
            <br />
            Touch
          </motion.h2>
          <a
            href="mailto:chityalasriram7522@gmail.com"
            className="mt-6 inline-block text-lg font-semibold underline decoration-2 underline-offset-4 hover:text-primary"
          >
            chityalasriram7522@gmail.com
          </a>
        </div>

        {/* Right: form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="Full Name*"
            className="border-0 border-b border-black/30 bg-transparent pb-2 text-sm outline-none placeholder:text-black/50 focus:border-black"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="Email*"
              className="border-0 border-b border-black/30 bg-transparent pb-2 text-sm outline-none placeholder:text-black/50 focus:border-black"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone"
              className="border-0 border-b border-black/30 bg-transparent pb-2 text-sm outline-none placeholder:text-black/50 focus:border-black"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={3}
            placeholder="Message"
            className="resize-none border-0 border-b border-black/30 bg-transparent pb-2 text-sm outline-none placeholder:text-black/50 focus:border-black"
          />
          <button
            type="submit"
            className="mt-2 rounded-full border-2 border-black/80 py-3.5 text-xs font-bold uppercase tracking-[0.3em] text-black transition-colors hover:bg-black hover:text-white"
          >
            Send
          </button>
        </motion.form>
      </div>

      <footer className="relative mx-auto mt-20 max-w-5xl border-t border-black/10 pt-8 text-center text-sm text-black/50">
        {/* © {new Date().getFullYear()} Chityala Sri Ram · Built with React, Tailwind & Motion */}
      </footer>
    </section>
  );
}
