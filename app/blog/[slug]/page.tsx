import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-10">

        {/* COVER IMAGE */}
        {data.cover && (
  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
    <Image
      src={data.cover}
      alt={data.title}
      fill
      className="object-cover"
      style={{
        objectPosition: `${data.focalX ?? 50}% ${data.focalY ?? 50}%`,
      }}
      priority
    />
  </div>
)}


        {/* TITLE */}
        <section className="space-y-4">
          <p className="text-sm text-indigo-400 uppercase tracking-wide">
            {data.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {data.title}
          </h1>

          <p className="text-gray-500 text-sm">{data.date}</p>
        </section>

        {/* CONTENT */}
        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={content} />
        </article>

      </main>

      <Footer />
    </>
  );
}
