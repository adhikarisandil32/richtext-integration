import React, { HTMLAttributes, HTMLInputTypeAttribute } from "react"
import { UseFormRegister } from "react-hook-form"

type InputProps = {
  name?: string
  type?: string
  fieldRule?: {}
  placeholder?: string
  register?: UseFormRegister<{ name: string }>
} & HTMLAttributes<HTMLInputElement>

export default function Input({ type = "text", register, name, fieldRule, ...props }: InputProps) {
  const registerProp = register ? register(name as "name", fieldRule) : {}

  return (
    <input
      type="text"
      {...registerProp}
      {...props}
    />
  )
}
