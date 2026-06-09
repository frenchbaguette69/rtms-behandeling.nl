import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getBlogs } from "@/lib/blogs";
import AdminNav from "@/components/admin/AdminNav";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const blogs = await getBlogs();
  const published = blogs.filter((b) => b.published).length;
  const drafts = blogs.filter((b) => !b.published).length;

  return (
    <div className="min-h-screen flex">
      <AdminNav />
      <main className="flex-1 p-8 lg:p-10">
        <div className="max-w-5xl">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Welkom terug, {session.user?.name ?? session.user?.email}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <StatCard label="Totaal blogs" value={blogs.length} icon="📝" />
            <StatCard label="Gepubliceerd" value={published} icon="✅" />
            <StatCard label="Concept" value={drafts} icon="✏️" />
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Recente blogs</h2>
            <Link
              href="/admin/blogs/nieuw"
              className="bg-[#33C5F3] hover:bg-[#1aaedc] text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
            >
              + Nieuw blog
            </Link>
          </div>

          <div className="space-y-3">
            {blogs.slice(0, 5).map((blog) => (
              <Link
                key={blog.id}
                href={`/admin/blogs/${blog.id}`}
                className="flex items-center justify-between bg-white hover:bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 transition group shadow-sm"
              >
                <div>
                  <p className="text-gray-900 font-medium group-hover:text-[#33C5F3] transition-colors">{blog.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{blog.date} · {blog.category}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${blog.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                  {blog.published ? "Gepubliceerd" : "Concept"}
                </span>
              </Link>
            ))}
            {blogs.length === 0 && (
              <div className="text-center py-12 text-gray-400 border border-gray-200 rounded-xl bg-white">
                Nog geen blogs. Maak je eerste blog aan.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: number; icon: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}
