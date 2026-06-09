"use client";

import Link from "next/link";
import { useState } from "react";
import type { AdminBlogPost } from "@/lib/blogs";

export default function BlogsTable({ blogs: initial }: { blogs: AdminBlogPost[] }) {
  const [blogs, setBlogs] = useState(initial);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (!confirm("Weet je zeker dat je dit blog wilt verwijderen?")) return;
    setDeleting(id);
    await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    setBlogs((prev) => prev.filter((b) => b.id !== id));
    setDeleting(null);
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-16 text-white/30 border border-white/5 rounded-2xl">
        <p className="text-4xl mb-3">✍</p>
        <p>Geen blogs gevonden. Maak je eerste blog aan.</p>
      </div>
    );
  }

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.02]">
            <th className="text-left px-5 py-3 text-white/40 font-medium">Titel</th>
            <th className="text-left px-5 py-3 text-white/40 font-medium hidden md:table-cell">Categorie</th>
            <th className="text-left px-5 py-3 text-white/40 font-medium hidden lg:table-cell">Datum</th>
            <th className="text-left px-5 py-3 text-white/40 font-medium">Status</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {blogs.map((blog) => (
            <tr key={blog.id} className="hover:bg-white/[0.03] transition-colors group">
              <td className="px-5 py-4">
                <p className="text-white font-medium line-clamp-1">{blog.title}</p>
                <p className="text-white/30 text-xs mt-0.5">/{blog.slug}</p>
              </td>
              <td className="px-5 py-4 text-white/50 hidden md:table-cell">{blog.category}</td>
              <td className="px-5 py-4 text-white/50 hidden lg:table-cell">{blog.date}</td>
              <td className="px-5 py-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${blog.published ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}>
                  {blog.published ? "Gepubliceerd" : "Concept"}
                </span>
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-2 justify-end">
                  <Link
                    href={`/admin/blogs/${blog.id}`}
                    className="text-white/40 hover:text-[#33C5F3] text-xs px-3 py-1.5 rounded-lg hover:bg-[#33C5F3]/10 transition"
                  >
                    Bewerken
                  </Link>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    disabled={deleting === blog.id}
                    className="text-white/30 hover:text-red-400 text-xs px-3 py-1.5 rounded-lg hover:bg-red-400/10 transition disabled:opacity-50"
                  >
                    {deleting === blog.id ? "..." : "Verwijderen"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
