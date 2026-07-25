"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogClient({ blogs }: { blogs: any[] }) {
  const categories = ["All", "Education", "Achievements", "Entertainment"];
  const [active, setActive] = useState("All");

  const filteredBlogs =
    active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-20">

      {/* HERO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Writing & Stories
        </h1>
        <p className="text-gray-400 text-lg">
          Products, growth systems, and the journey of building in public.
        </p>
      </section>

      {/* FILTER */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm border
              ${
                active === cat
                  ? "bg-white text-black"
                  : "border-white/20 text-gray-300 hover:border-white/50"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* BLOG GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map((blog, i) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-surface"
          >
            <Link href={`/blog/${blog.slug}`}>

              <div className="relative aspect-[16/10]">
                <Image
  src={blog.cover}
  alt={blog.title}
  fill
  className="object-cover transition-all duration-500"
  style={{
    objectPosition: `${blog.focalX}% ${blog.focalY}%`,
  }}
/>

              </div>

              <div className="p-6 space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-indigo-400 uppercase">{blog.category}</span>
                  <span className="text-gray-500">{blog.date}</span>
                </div>

                <h2 className="text-white text-lg">{blog.title}</h2>

                <p className="text-sm text-gray-400">{blog.excerpt}</p>

                <p className="text-sm text-white/80">Read →</p>
              </div>

            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
