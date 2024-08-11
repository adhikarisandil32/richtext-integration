import React, { useState } from "react"
import { useFormContext } from "../../contexts/form-provider-context"
import AnimatedInput from "../composites/animated-input"
import { AnimatedInputProps } from "../composites/animated-input"

export default function AnimatedInputWrapper({ name, ...props }: AnimatedInputProps) {
  const { register, getValues, errors } = useFormContext()
  const [hasValue, setHasValue] = useState<boolean>(false)

  return (
    <AnimatedInput
      register={register}
      name={name}
      {...props}
      errors={errors}
      onFocus={() => setHasValue(true)}
      onBlur={() => {
        const value = getValues(name)?.trim()
        if (!value) return setHasValue(false)

        return setHasValue(true)
      }}
      hasValue={hasValue}
    />
  )
}
