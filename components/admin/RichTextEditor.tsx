"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback, useRef } from "react";

interface Props {
  value: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ value, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false }),
      Placeholder.configure({ placeholder: "Begin met schrijven..." }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none min-h-[400px] px-6 py-5 text-white/80",
      },
    },
    immediatelyRender: false,
  });

  const addLink = useCallback(() => {
    const url = prompt("URL:");
    if (!url || !editor) return;
    editor.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  const uploadImage = useCallback(async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url && editor) {
      editor.chain().focus().setImage({ src: data.url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  const ToolBtn = ({
    onClick,
    active,
    title,
    children,
  }: {
    onClick: () => void;
    active?: boolean;
    title: string;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      title={title}
      className={`px-2 py-1.5 rounded-lg text-sm font-medium transition-colors ${
        active ? "bg-[#33C5F3]/20 text-[#33C5F3]" : "text-white/50 hover:text-white hover:bg-white/5"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 px-3 py-2 border-b border-white/10 bg-white/[0.02]">
        {/* Headings */}
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive("heading", { level: 1 })} title="Kop 1">H1</ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="Kop 2">H2</ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="Kop 3">H3</ToolBtn>

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Formatting */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Vet"><strong>B</strong></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Cursief"><em>I</em></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")} title="Onderstrepen"><span className="underline">U</span></ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")} title="Doorhalen"><s>S</s></ToolBtn>

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Lists */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Lijst">≡</ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Genummerde lijst">1.</ToolBtn>

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Align */}
        <ToolBtn onClick={() => editor.chain().focus().setTextAlign("left").run()} active={editor.isActive({ textAlign: "left" })} title="Links">⬤</ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setTextAlign("center").run()} active={editor.isActive({ textAlign: "center" })} title="Midden">⊙</ToolBtn>

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Link */}
        <ToolBtn onClick={addLink} active={editor.isActive("link")} title="Link invoegen">🔗</ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().unsetLink().run()} title="Link verwijderen">✂</ToolBtn>

        {/* Image upload */}
        <ToolBtn
          onClick={() => fileInputRef.current?.click()}
          title="Afbeelding uploaden"
        >🖼</ToolBtn>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) uploadImage(file);
            e.target.value = "";
          }}
        />

        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Quote & HR */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Citaat">&ldquo;</ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontale lijn">—</ToolBtn>
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} />
    </div>
  );
}
