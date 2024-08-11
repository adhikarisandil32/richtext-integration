import React, { ReactElement, useRef, useState } from "react"
import Button from "../elements/button"
import { Bold, Italic, Link, List, ListOrdered, Strikethrough, Underline, X } from "lucide-react"
import { twMerge } from "tailwind-merge"
import Modal from "./modal"
import Input from "../elements/input"

export default function RichtextToolbar({ editor }: any) {
  const [open, setOpen] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | null>()

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
          <Modal.Trigger className={twMerge("px-2 py-1", editor.isActive("link") ? "bg-blue-800 text-white" : "")}>
            <Link />
          </Modal.Trigger>

          {
            <Modal.Content>
              <div className="w-[400px] space-y-4 rounded-md bg-blue-100 p-4">
                <div className="text-right">
                  <Button
                    onClick={() => setOpen(false)}
                    className="p-0"
                  >
                    <X />
                  </Button>
                </div>

                <div>
                  <Input
                    inputRef={inputRef}
                    className="w-full rounded-md bg-white/75 p-2 outline-none"
                    placeholder="https://example.com"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    className="bg-red-800 text-white"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-blue-800 text-white"
                    onClick={() => {
                      editor.chain().focus().setLink({ href: inputRef.current?.value, target: "_blank" }).run()
                      setOpen(false)
                    }}
                  >
                    Set Link
                  </Button>
                </div>
              </div>
            </Modal.Content>
          }
        </Modal>
      </div>
    </div>
  )
}
