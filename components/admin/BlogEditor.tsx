"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import type { AdminBlogPost } from "@/lib/blogs";
import Image from "next/image";

const RichTextEditor = dynamic(() => import("./RichTextEditor"), { ssr: false });

type BlogFormData = Omit<AdminBlogPost, "id" | "createdAt" | "updatedAt">;

interface Props {
  initial?: AdminBlogPost;
}

const CATEGORIES = ["Educatief", "Ervaringen", "Wetenschap", "Praktisch", "Lokaal"] as const;

export default function BlogEditor({ initial }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const featuredRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<BlogFormData>({
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    metaTitle: initial?.metaTitle ?? "",
    metaDescription: initial?.metaDescription ?? "",
    focusKeyword: initial?.focusKeyword ?? "",
    category: initial?.category ?? "Educatief",
    date: initial?.date ?? "",
    excerpt: initial?.excerpt ?? "",
    readingTime: initial?.readingTime ?? "5 min",
    featuredImage: initial?.featuredImage,
    content: initial?.content ?? "",
    published: initial?.published ?? false,
  });

  function set<K extends keyof BlogFormData>(key: K, value: BlogFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function slugify(val: string) {
    return val
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  async function uploadFeatured(file: File) {
    setUploadingImg(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) set("featuredImage", data.url);
    setUploadingImg(false);
  }

  async function handleSave(publishOverride?: boolean) {
    setSaving(true);
    const payload = { ...form };
    if (publishOverride !== undefined) payload.published = publishOverride;

    const res = await fetch(
      initial ? `/api/admin/blogs/${initial.id}` : "/api/admin/blogs",
      {
        method: initial ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (res.ok) {
      router.push("/admin/blogs");
      router.refresh();
    } else {
      alert("Opslaan mislukt");
    }
    setSaving(false);
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">
      {/* Left column — main content */}
      <div className="space-y-6">
        <div>
          <label className="label">Titel</label>
          <input
            className="input"
            placeholder="Blogpost titel"
            value={form.title}
            onChange={(e) => {
              set("title", e.target.value);
              if (!initial) set("slug", slugify(e.target.value));
              if (!form.metaTitle || form.metaTitle === form.title) set("metaTitle", e.target.value);
            }}
          />
        </div>

        <div>
          <label className="label">URL slug</label>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#33C5F3]/50">
            <span className="px-4 text-white/30 text-sm border-r border-white/10 py-3">/blog/</span>
            <input
              className="flex-1 bg-transparent px-4 py-3 text-white text-sm focus:outline-none"
              value={form.slug}
              onChange={(e) => set("slug", slugify(e.target.value))}
              placeholder="mijn-blog-post"
            />
          </div>
        </div>

        <div>
          <label className="label">Samenvatting / Excerpt</label>
          <textarea
            className="input min-h-[80px] resize-y"
            placeholder="Korte samenvatting van het blog..."
            value={form.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
          />
        </div>

        <div>
          <label className="label">Inhoud</label>
          <RichTextEditor
            value={form.content}
            onChange={(html) => set("content", html)}
          />
        </div>
      </div>

      {/* Right column — meta & settings */}
      <div className="space-y-5">
        {/* Publish card */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
          <h3 className="text-white font-medium mb-4">Publiceren</h3>
          <div className="flex items-center justify-between mb-5">
            <span className="text-white/60 text-sm">Status</span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${form.published ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}>
              {form.published ? "Gepubliceerd" : "Concept"}
            </span>
          </div>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => handleSave(!form.published)}
              disabled={saving}
              className="w-full bg-[#33C5F3] hover:bg-[#1aaedc] disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
            >
              {saving ? "Opslaan..." : form.published ? "Opslaan als concept" : "Publiceren"}
            </button>
            <button
              type="button"
              onClick={() => handleSave()}
              disabled={saving}
              className="w-full bg-white/5 hover:bg-white/10 disabled:opacity-50 text-white/70 font-medium py-2.5 rounded-xl text-sm transition-colors"
            >
              {saving ? "..." : "Opslaan"}
            </button>
          </div>
        </div>

        {/* Featured image */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
          <h3 className="text-white font-medium mb-4">Uitgelichte afbeelding</h3>
          {form.featuredImage ? (
            <div className="space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
                <Image src={form.featuredImage} alt="Featured" fill className="object-cover" />
              </div>
              <button
                type="button"
                onClick={() => set("featuredImage", undefined)}
                className="text-red-400/70 hover:text-red-400 text-xs transition-colors"
              >
                Verwijder afbeelding
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => featuredRef.current?.click()}
              disabled={uploadingImg}
              className="w-full border-2 border-dashed border-white/10 hover:border-[#33C5F3]/30 rounded-xl py-8 text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              {uploadingImg ? "Uploaden..." : "+ Afbeelding uploaden"}
            </button>
          )}
          <input
            ref={featuredRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) uploadFeatured(f);
              e.target.value = "";
            }}
          />
        </div>

        {/* Category & reading time */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 space-y-4">
          <h3 className="text-white font-medium">Details</h3>
          <div>
            <label className="label">Categorie</label>
            <select
              className="input"
              value={form.category}
              onChange={(e) => set("category", e.target.value as BlogFormData["category"])}
            >
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Datum</label>
            <input
              className="input"
              placeholder="1 januari 2026"
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
            />
          </div>
          <div>
            <label className="label">Leestijd</label>
            <input
              className="input"
              placeholder="5 min"
              value={form.readingTime}
              onChange={(e) => set("readingTime", e.target.value)}
            />
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 space-y-4">
          <h3 className="text-white font-medium">SEO</h3>
          <div>
            <label className="label">Meta titel</label>
            <input
              className="input"
              placeholder="SEO paginatitel"
              value={form.metaTitle}
              onChange={(e) => set("metaTitle", e.target.value)}
            />
            <p className="text-white/25 text-xs mt-1">{form.metaTitle.length}/60 tekens</p>
          </div>
          <div>
            <label className="label">Meta omschrijving</label>
            <textarea
              className="input min-h-[80px] resize-none"
              placeholder="Meta description voor zoekmachines..."
              value={form.metaDescription}
              onChange={(e) => set("metaDescription", e.target.value)}
            />
            <p className="text-white/25 text-xs mt-1">{form.metaDescription.length}/160 tekens</p>
          </div>
          <div>
            <label className="label">Focus keyword</label>
            <input
              className="input"
              placeholder="Hoofd zoekwoord"
              value={form.focusKeyword}
              onChange={(e) => set("focusKeyword", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
