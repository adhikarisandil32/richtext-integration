import React, { HTMLAttributes } from "react"
import { UseFormRegister } from "react-hook-form"

type InputProps = {
  name?: string
  type?: string
  inputRef?: any
  fieldRule?: {}
  placeholder?: string
  register?: UseFormRegister<{ name: string }>
} & HTMLAttributes<HTMLInputElement>

export default function Input({ type = "text", register, name, inputRef, fieldRule, ...props }: InputProps) {
  const registerProp = register ? register(name as "name", fieldRule) : {}

  return (
    <input
      type="text"
      ref={inputRef}
      {...registerProp}
      {...props}
    />
  )
}
