import { User } from "lucide-react"
import Richtext from "./components/richtext"
import FormProvider from "./contexts/form-provider-context"

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
        <div>
          <Richtext />
        </div>
      </FormProvider>
    </div>
  )
}

export default App
