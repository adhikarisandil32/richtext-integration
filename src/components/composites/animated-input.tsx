import React from "react"
import { twMerge } from "tailwind-merge"

export type AnimatedInputProps = {
  type?: string
  placeholder?: string
  required?: boolean
  fieldRule?: {}
  errors?: any
  register?: any
  hasValue?: boolean
  onFocus?: () => void
  onBlur?: () => void
} & React.InputHTMLAttributes<HTMLInputElement>

export default function AnimatedInput({
  required,
  name,
  fieldRule = {},
  className,
  placeholder,
  hasValue,
  register,
  errors,
  ...props
}: AnimatedInputProps) {
  const registration = name ? register(name, fieldRule) : {}

  return (
    <div className="relative">
      <input
        {...registration}
        {...props}
        className={twMerge(
          "w-full rounded-md bg-transparent p-2 outline-none",
          className,
          name ? (errors[name] ? "border-red-600" : "") : "",
        )}
      />

      {placeholder && (
        <span
          className={twMerge(
            "pointer-events-none absolute -translate-y-1/2 bg-white px-2 transition-all duration-300",
            hasValue ? "-top-1 left-4 z-10 opacity-100" : "left-2 top-1/2 -z-10 opacity-50",
            name ? (errors[name] ? "text-red-600" : "") : "",
          )}
        >
          {placeholder} {required && "*"}
        </span>
      )}
    </div>
  )
}
