"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* TAG */}
          <span className="inline-block text-xs text-gray-400 border border-white/10 px-3 py-1 rounded-full">
            Builder · Developer · Growth
          </span>

          {/* HEADING */}
           <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Work and thinking at the intersection of{" "}
          <span className="text-white">software, growth, and story</span>.
        </h1>
 <p className="text-gray-400 text-lg">
          Software Developer · Digital Marketer · Storyteller
        </p>
     

          {/* SUBTEXT */}
          <p className="text-gray-400 text-lg max-w-xl">
            I design and build scalable systems, SaaS products, and digital
            experiences that blend engineering with storytelling.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-2">
            <a
              href="#work"
              className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition"
            >
              View Work
            </a>

            <a
              href="#writing"
              className="px-6 py-3 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white hover:text-black transition"
            >
              Read Blog
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
        >
          <Image
            src="/bikram.jpg"
            alt="Bikram Mondal"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}