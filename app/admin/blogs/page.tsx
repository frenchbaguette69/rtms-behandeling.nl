import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getBlogs } from "@/lib/blogs";
import AdminNav from "@/components/admin/AdminNav";
import BlogsTable from "@/components/admin/BlogsTable";
import Link from "next/link";

export default async function AdminBlogsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const blogs = await getBlogs();

  return (
    <div className="min-h-screen flex">
      <AdminNav />
      <main className="flex-1 p-8 lg:p-10">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-white">Blogs</h1>
              <p className="text-white/40 text-sm mt-1">{blogs.length} artikel{blogs.length !== 1 ? "en" : ""}</p>
            </div>
            <Link
              href="/admin/blogs/nieuw"
              className="bg-[#33C5F3] hover:bg-[#1aaedc] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              + Nieuw blog
            </Link>
          </div>
          <BlogsTable blogs={blogs} />
        </div>
      </main>
    </div>
  );
}
