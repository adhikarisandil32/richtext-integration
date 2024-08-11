import Richtext from "../blocks/richtext"
import Button from "../elements/button"
import { useFormContext } from "../../contexts/form-provider-context"
import AnimatedInputWrapper from "../blocks/animated-input-wrapper"
import { useRef, useState } from "react"

export default function Form() {
  const { control, getValues, errors, setValue, handleSubmit } = useFormContext()
  const [data, setData] = useState<string>()
  const submitFn = (data: any) => {
    console.log(data)
    setData(JSON.stringify(data))
  }

  return (
    <div className="space-y-8">
      <AnimatedInputWrapper
        placeholder="Name"
        name="name"
        fieldRule={{ required: "This field is required" }}
        className="border-2 border-[#bbb]"
        required
      />

      <Richtext
        name="description"
        placeholder="Description"
        errors={errors}
        control={control}
        getValues={getValues}
        setValue={setValue}
        required
      />

      <div className="text-center">
        <Button
          className="bg-blue-600 text-white"
          type="submit"
          onClick={handleSubmit(submitFn)}
        >
          Submit
        </Button>
      </div>

      <div>
        <h2 className="text-center text-3xl font-bold">Output</h2>
        <div className="mx-auto w-[min(600px,100%)] text-center">{data}</div>
      </div>
    </div>
  )
}
