"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  focalX?: number;
  focalY?: number;
};

export default function InsightClient({
  insights,
}: {
  insights: Insight[];
}) {
  const categories = [
    "All",
    ...Array.from(
      new Set(
        insights
          .map((insight) => insight.category)
          .filter(Boolean)
      )
    ),
  ];

  const [active, setActive] = useState("All");

  const filteredInsights =
    active === "All"
      ? insights
      : insights.filter(
          (insight) => insight.category === active
        );

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-20">

      {/* HERO */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Insights
        </h1>

        <p className="text-gray-400 text-lg">
          Ideas, lessons, and frameworks on building businesses,
          generating demand, and turning ideas into systems.
        </p>
      </section>

      {/* FILTER */}
      {categories.length > 1 && (
        <div className="flex gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                active === category
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-gray-300 hover:border-white/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* INSIGHT GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredInsights.map((insight, index) => (
          <motion.article
            key={insight.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
            }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-surface"
          >
            <Link
              href={`/insights/${insight.slug}`}
              className="block group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={insight.cover}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: `${insight.focalX ?? 50}% ${
                      insight.focalY ?? 50
                    }%`,
                  }}
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center gap-4 text-xs">
                  <span className="text-indigo-400 uppercase tracking-wide">
                    {insight.category}
                  </span>

                  <span className="text-gray-500 whitespace-nowrap">
                    {insight.date}
                  </span>
                </div>

                <h2 className="text-white text-lg font-medium leading-snug group-hover:text-white/80 transition-colors">
                  {insight.title}
                </h2>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {insight.excerpt}
                </p>

                <p className="text-sm text-white/80 pt-2 group-hover:text-white transition-colors">
                  Read →
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>

      {/* EMPTY STATE */}
      {filteredInsights.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-500">
            No insights found in this category.
          </p>
        </div>
      )}

    </main>
  );
}