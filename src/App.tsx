import { Route, Routes } from "react-router"
import RootLayout from "./layout/rootLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
    <Routes>
      <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
