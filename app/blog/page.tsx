import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogClient from "./BlogClient";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <Header />
      <BlogClient blogs={blogs} />
      <Footer />
    </>
  );
}