"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-28">

        {/* HERO */}
     <section className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Work and thinking at the intersection of{" "}
          <span className="text-white">software, growth, and story</span>.
        </h1>

        <p className="text-gray-400 text-lg">
          Software Developer · Digital Marketer · Storyteller
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
      >
        <Image
          src="/bikram.jpg"
          alt="Bikram Mondal"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

    </section>

        {/* INTRO */}
        <section className="space-y-6 text-gray-300 leading-relaxed max-w-3xl">
          <p>
            I’m a builder working across software engineering, product thinking,
            and digital growth.
          </p>
          <p>
            My work lives where logic meets narrative — systems that scale,
            products that feel human, and ideas that travel through culture.
          </p>
          <p>
            This site is a living record of what I build, explore, and learn.
          </p>
        </section>

        {/* SELECTED WORK */}
<section id="work" className="space-y-10">
  <h2 className="text-2xl font-semibold text-white">
    Selected Work
  </h2>

  <div className="grid gap-8 md:grid-cols-3">
    {[
      {
        title: "SaaS & Applications",
        img: "https://img.icons8.com/ios-filled/100/ffffff/source-code.png",
        desc: "Full-stack products, MVPs, internal tools, automation systems.",
      },
      {
        title: "Growth & Systems",
        img: "https://img.icons8.com/ios-filled/100/ffffff/combo-chart.png",
        desc: "Funnels, analytics, automation, and first-party data systems.",
      },
      {
        title: "Media & Storytelling",
        img: "https://img.icons8.com/ios-filled/100/ffffff/storytelling.png",
        desc: "Narrative-led content and culturally rooted storytelling.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-xl border border-white/10 bg-surface p-6"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src={item.img}
              alt={item.title}
              width={32}
              height={32}
            />
          </div>

          <h3 className="text-lg font-medium text-white">
            {item.title}
          </h3>
        </div>

        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


        {/* EXPERTISE */}
        <section className="space-y-10 max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            Areas of Expertise
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li><strong className="text-white">Software Development</strong> — Full-stack systems & scalable architecture.</li>
            <li><strong className="text-white">Product Thinking</strong> — Turning ideas into durable systems.</li>
            <li><strong className="text-white">Growth & Strategy</strong> — Performance, automation, analytics.</li>
            <li><strong className="text-white">Story & Communication</strong> — Making technology human.</li>
          </ul>
        </section>

        {/* PRINCIPLES */}
        <section className="space-y-6 border-l border-white/10 pl-6 text-gray-300 max-w-2xl">
          <p>I don’t chase trends.</p>
          <p>Systems over shortcuts.</p>
          <p>Good products are engineered.</p>
          <p>Great products are felt.</p>
          <p>Technology needs story to matter.</p>
        </section>

        {/* WRITING */}
        <section id="writing" className="space-y-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            Writing & Thinking
          </h2>
          <p className="text-gray-400">
            Occasional writing on building products, software creativity,
            growth systems, and media-tech intersections.
          </p>
        </section>

        {/* CURRENT FOCUS */}
        <section id="focus" className="space-y-4 max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">
            Current Focus
          </h2>
          <p className="text-gray-400">
            Building scalable SaaS products, exploring media-tech hybrids,
            and refining systems that merge engineering, growth, and narrative.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
