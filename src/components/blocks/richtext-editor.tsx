import { EditorContent } from "@tiptap/react"
import { Controller } from "react-hook-form"

export default function RichtextEditor({ editor, control, name, onFocus, onBlur }: any) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: "field required",
        },
        validate: (value) => {
          if (value && value.trim() !== "<p></p>") return true

          return "error"
        },
      }}
      render={({ field }) => (
        <EditorContent
          {...field}
          onFocus={onFocus}
          onBlur={onBlur}
          editor={editor}
        />
      )}
    />
  )
}
