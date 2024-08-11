import { User } from "lucide-react"
import FormProvider from "./contexts/form-provider-context"
import Form from "./components/structures/Form"

function App() {
  return (
    <div className="container">
      <div className="p-4">
        <User
          color="#000"
          className="mx-auto"
        />
      </div>

      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  )
}

export default App
