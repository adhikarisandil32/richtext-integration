import React, { useState } from "react"
import Button from "../elements/button"
import { Bold, Italic, Link, List, ListOrdered, Strikethrough, Underline, X } from "lucide-react"
import { twMerge } from "tailwind-merge"
import Modal from "./modal"

export default function RichtextToolbar({ editor }: any) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex gap-2 border-t-2 border-[#bbb] pt-2">
      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("bold") ? "bg-blue-800 text-white" : "")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("italic") ? "bg-blue-800 text-white" : "")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("strike") ? "bg-blue-800 text-white" : "")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("underline") ? "bg-blue-800 text-white" : "")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("bulletList") ? "bg-blue-800 text-white" : "")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List />
        </Button>
      </div>

      <div>
        <Button
          className={twMerge("px-2 py-1", editor.isActive("orderedList") ? "bg-blue-800 text-white" : "")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered />
        </Button>
      </div>

      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Modal.Trigger>
            <Link />
          </Modal.Trigger>

          <Modal.Content>
            <Button>
              <X />
            </Button>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  )
}
