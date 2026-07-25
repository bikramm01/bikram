"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    slug: "crm-for-small-business",
    title: "Why Every Small Business Needs a CRM in 2025",
    desc: "Discover how CRM systems help streamline sales, automate tasks, and boost growth.",
    img: "/blog/blog1.jpg",
    date: "April 2026",
  },
  {
    slug: "freelancer-invoice-guide",
    title: "The Ultimate Invoice Guide for Freelancers",
    desc: "Learn how to create professional invoices that get you paid faster.",
    img: "/blog/blog2.jpg",
    date: "March 2026",
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation: Save Time & Scale Faster",
    desc: "Automate your marketing workflows and grow your business efficiently.",
    img: "/blog/blog3.jpg",
    date: "February 2026",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-black">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Insights & Resources
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Learn, grow, and scale with expert content
          </p>
        </div>

        <Link
          href="/blog"
          className="text-sm text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
        >
          View All
        </Link>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group border border-white/10 rounded-2xl overflow-hidden bg-[#0f0f0f] hover:border-white/30 transition"
          >
            
            {/* IMAGE */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3">
              <span className="text-xs text-gray-500">{blog.date}</span>

              <h3 className="text-white text-lg font-medium group-hover:text-gray-200 transition">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-2">
                {blog.desc}
              </p>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-sm text-white mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More →
              </Link>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}