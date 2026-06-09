import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { getBlogById } from "@/lib/blogs";
import AdminNav from "@/components/admin/AdminNav";
import BlogEditor from "@/components/admin/BlogEditor";
import Link from "next/link";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) notFound();

  return (
    <div className="min-h-screen flex">
      <AdminNav />
      <main className="flex-1 p-8 lg:p-10 overflow-auto">
        <div className="max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/admin/blogs" className="text-white/30 hover:text-white transition-colors text-sm">
              ← Blogs
            </Link>
            <span className="text-white/20">/</span>
            <h1 className="text-xl font-semibold text-white line-clamp-1">{blog.title}</h1>
          </div>
          <BlogEditor initial={blog} />
        </div>
      </main>
    </div>
  );
}
