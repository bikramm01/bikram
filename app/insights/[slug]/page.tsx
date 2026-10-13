
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

const INSIGHTS_DIR = path.join(process.cwd(), "content/insights");

export default async function InsightPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Prevent invalid paths from escaping the insights directory.
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    notFound();
  }

  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  // Remove frontmatter from the body if it was accidentally duplicated.
  const articleContent = content.replace(
    /^\s*---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/,
    ""
  );

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-10">
        {/* COVER IMAGE */}
        {typeof data.cover === "string" && data.cover.trim() && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={data.cover}
              alt={data.title ?? "Insight cover"}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              style={{
                objectPosition: `${data.focalX ?? 50}% ${
                  data.focalY ?? 50
                }%`,
              }}
              priority
            />
          </div>
        )}

        {/* HEADER */}
        <section className="space-y-4">
          {data.category && (
            <p className="text-sm text-indigo-400 uppercase tracking-wide">
              {data.category}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            {data.title}
          </h1>

          {data.excerpt && (
            <p className="text-xl text-gray-400 leading-relaxed">
              {data.excerpt}
            </p>
          )}

          {data.date && (
            <p className="text-gray-500 text-sm">{data.date}</p>
          )}
        </section>

        {/* ARTICLE BODY */}
        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={articleContent} />
        </article>
      </main>

      <Footer />
    </>
  );
}
