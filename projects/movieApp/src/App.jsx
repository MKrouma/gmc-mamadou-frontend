import Home from "./pages/Home"
import Movies from "./pages/Movies";
import { Container } from "@chakra-ui/react"
import {
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <Container fluid mt="30px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </Container>

  )
}

export default App
