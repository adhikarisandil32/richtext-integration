import React from "react"
import Button from "./elements/button"
import { Bold, Italic, Link, List, ListOrdered, Strikethrough, Underline } from "lucide-react"
import { twMerge } from "tailwind-merge"

export default function RichtextToolbar({ editor }: any) {
  return (
    <div className="flex gap-2 pt-2 border-t-2 border-[#bbb]">
      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("bold") ? "text-white bg-blue-800" : "")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("italic") ? "text-white bg-blue-800" : "")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("strike") ? "text-white bg-blue-800" : "")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("underline") ? "text-white bg-blue-800" : "")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("bulletList") ? "text-white bg-blue-800" : "")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("orderedList") ? "text-white bg-blue-800" : "")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered />
        </Button>
      </div>

      <div>
        <Button className="px-2 py-1">
          <Link />
        </Button>
      </div>
    </div>
  )
}
