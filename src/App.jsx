import { Routes, Route } from "react-router-dom"
import Index from "./routes/Index"
import Test from "./routes/Test"
import Layout from "./layout/Layout"
import Repos from "./routes/Repos"
import Repo from "./routes/Repo"
import './Scss/main.scss'

function App() {
 return(
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="test" element={<Test />} />
      <Route path="public_repos" element={<Repos />} />
      <Route path="public_repos/:id" element={<Repo />} />
    </Route>
  </Routes>
 )
}

export default App
