import fs from "fs/promises";
import path from "path";

export interface AdminBlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  category: "Educatief" | "Ervaringen" | "Wetenschap" | "Praktisch" | "Lokaal";
  date: string;
  excerpt: string;
  readingTime: string;
  featuredImage?: string;
  content: string; // HTML from Tiptap
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const BLOGS_DIR = path.join(process.cwd(), "data", "blogs");

export async function getBlogs(): Promise<AdminBlogPost[]> {
  try {
    await fs.mkdir(BLOGS_DIR, { recursive: true });
    const files = await fs.readdir(BLOGS_DIR);
    const blogs = await Promise.all(
      files
        .filter((f) => f.endsWith(".json"))
        .map(async (f) => {
          const raw = await fs.readFile(path.join(BLOGS_DIR, f), "utf-8");
          return JSON.parse(raw) as AdminBlogPost;
        })
    );
    return blogs.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch {
    return [];
  }
}

export async function getBlogById(id: string): Promise<AdminBlogPost | null> {
  try {
    const raw = await fs.readFile(path.join(BLOGS_DIR, `${id}.json`), "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function getBlogBySlug(slug: string): Promise<AdminBlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug) ?? null;
}

export async function saveBlog(blog: AdminBlogPost): Promise<void> {
  await fs.mkdir(BLOGS_DIR, { recursive: true });
  await fs.writeFile(
    path.join(BLOGS_DIR, `${blog.id}.json`),
    JSON.stringify(blog, null, 2)
  );
}

export async function deleteBlog(id: string): Promise<void> {
  await fs.unlink(path.join(BLOGS_DIR, `${id}.json`));
}
