import fs from "fs";
import path from "path";
import matter from "gray-matter";

const INSIGHTS_DIR = path.join(process.cwd(), "content/insights");

export function getAllInsights() {
  const files = fs.readdirSync(INSIGHTS_DIR);

  const insights = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");

    const filePath = path.join(INSIGHTS_DIR, file);

    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      cover: data.cover,
      focalX: data.focalX ?? 50,
      focalY: data.focalY ?? 50,
    };
  });

  return insights.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}