"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "⊞" },
  { href: "/admin/blogs", label: "Blogs", icon: "✍" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 border-r border-gray-200 bg-white flex flex-col min-h-screen">
      <div className="px-6 py-6 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#33C5F3]/10 flex items-center justify-center">
            <span className="text-[#33C5F3] text-sm font-bold">R</span>
          </div>
          <div>
            <p className="text-gray-900 text-sm font-semibold leading-none">rTMS Admin</p>
            <p className="text-gray-400 text-xs mt-0.5">Beheerder</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                active
                  ? "bg-[#33C5F3]/10 text-[#33C5F3] font-medium"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-gray-100">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
        >
          <span>↩</span>
          Uitloggen
        </button>
      </div>
    </aside>
  );
}
