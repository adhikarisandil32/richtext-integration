import React, { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default React.forwardRef(function Button({ children, className, ...props }: ButtonProps, ref: any) {
  return (
    <button
      className={twMerge("rounded-md px-4 py-1", className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
