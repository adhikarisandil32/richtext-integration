import React from "react"
import { useForm } from "react-hook-form"

type FormProviderProps = {
  children: React.ReactNode
}

const FormContext = React.createContext<{}>({})

export const useFormContext = (): any => {
  const context = React.useContext(FormContext)

  if (!context) {
    throw new Error("use useFormContext within the scope of FormProvider")
  }

  return context
}

export default function FormProvider({ children }: FormProviderProps) {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm()

  return (
    <FormContext.Provider value={{ handleSubmit, control, register, watch, setValue, getValues, errors }}>
      {children}
    </FormContext.Provider>
  )
}
