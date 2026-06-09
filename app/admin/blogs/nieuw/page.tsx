import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import BlogEditor from "@/components/admin/BlogEditor";
import Link from "next/link";

export default async function NewBlogPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

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
            <h1 className="text-xl font-semibold text-white">Nieuw blog</h1>
          </div>
          <BlogEditor />
        </div>
      </main>
    </div>
  );
}
