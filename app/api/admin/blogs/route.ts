import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getBlogs, saveBlog, type AdminBlogPost } from "@/lib/blogs";
import { randomUUID } from "crypto";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const now = new Date().toISOString();
  const blog: AdminBlogPost = {
    id: randomUUID(),
    slug: body.slug,
    title: body.title,
    metaTitle: body.metaTitle ?? body.title,
    metaDescription: body.metaDescription ?? "",
    focusKeyword: body.focusKeyword ?? "",
    category: body.category ?? "Educatief",
    date: body.date ?? new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" }),
    excerpt: body.excerpt ?? "",
    readingTime: body.readingTime ?? "5 min",
    featuredImage: body.featuredImage,
    content: body.content ?? "",
    published: body.published ?? false,
    createdAt: now,
    updatedAt: now,
  };

  await saveBlog(blog);
  return NextResponse.json(blog, { status: 201 });
}
