import LeadForm from "./components/LeadForms"

import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LeadForm/>}></Route>
    </Routes>
  </BrowserRouter>
)
export default App
