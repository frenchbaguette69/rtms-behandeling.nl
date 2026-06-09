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
    <aside className="w-60 shrink-0 border-r border-white/10 bg-white/[0.02] flex flex-col min-h-screen">
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#33C5F3]/20 flex items-center justify-center">
            <span className="text-[#33C5F3] text-sm font-bold">R</span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none">rTMS Admin</p>
            <p className="text-white/30 text-xs mt-0.5">Beheerder</p>
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
                  ? "bg-[#33C5F3]/15 text-[#33C5F3] font-medium"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all"
        >
          <span>↩</span>
          Uitloggen
        </button>
      </div>
    </aside>
  );
}
