import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TemplateSPA from "./pages/TemplateSPA";
import Cadastro from "./pages/Cadastro";
import Agendamento from "./pages/Agendamento";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="alturaMinima">
        <Routes>
          <Route exact path="/" element={<TemplateSPA />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Agendamento" element={<Agendamento />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
