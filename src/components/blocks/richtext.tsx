import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import RichtextEditor from "./richtext-editor"
import RichtextToolbar from "./richtext-toolbar"
import Underline from "@tiptap/extension-underline"
import { twMerge } from "tailwind-merge"
import React, { useState } from "react"
import Link from "@tiptap/extension-link"

type RichtextProp = {
  placeholder?: string
  name: string
  required?: boolean
  control?: any
  getValues?: any
  setValue?: any
  errors?: any
}

export default React.memo(function Richtext({
  required,
  errors,
  getValues,
  setValue,
  control,
  placeholder,
  name,
}: RichtextProp) {
  const [hasValue, setHasValue] = useState<boolean>(false)

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link.extend({ inclusive: false }).configure({ openOnClick: true })],
    editorProps: {
      attributes: {
        class: "relative outline-none border-none",
      },
    },
    onUpdate: ({ editor }) => setValue(name, editor.getHTML(), { shouldValidate: true }),
  })

  return (
    <>
      <div
        className={twMerge(
          "relative rounded-md border-2 border-[#bbb] p-2",
          errors && name ? (errors[name] ? "border-red-600" : "") : "",
        )}
      >
        <RichtextEditor
          name={name}
          control={control}
          onFocus={() => setHasValue(true)}
          onBlur={() => {
            const value = getValues(name)?.trim()

            if (value && value !== "<p></p>") return

            return setHasValue(false)
          }}
          editor={editor}
        />

        {placeholder && (
          <span
            className={twMerge(
              "pointer-events-none absolute -translate-y-1/2 bg-white px-2 transition-all duration-300",
              hasValue ? "-top-1 left-4 z-10 opacity-100" : "left-2 top-5 -z-10 opacity-50",
              errors && name ? (errors[name] ? "text-red-600" : "") : "",
            )}
          >
            {placeholder} {required && "*"}
          </span>
        )}

        <RichtextToolbar editor={editor} />
      </div>
    </>
  )
})
