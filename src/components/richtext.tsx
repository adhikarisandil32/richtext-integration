import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import RichtextEditor from "./richtext-editor"
import RichtextToolbar from "./richtext-toolbar"
import Underline from "@tiptap/extension-underline"

const extensions = [StarterKit, Underline]

export default function Richtext() {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: "outline-none border-none p-2",
      },
    },
  })

  return (
    <div className="border-[#bbb] border-2 rounded-md p-2">
      <RichtextEditor editor={editor} />
      <RichtextToolbar editor={editor} />
    </div>
  )
}
