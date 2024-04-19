import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TemplateSPA from "./pages/TemplateSPA";
import Cadastro from "./pages/Cadastro";
import Agendamento from "./pages/Agendamento";
<<<<<<< HEAD
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
=======
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateSPA/>} />
        <Route path="/src/pages/Cadastro.js" element={<Cadastro/>} />
        <Route path="/src/pages/Agendamento.js" element={<Agendamento/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </>
>>>>>>> 733fc1eb973c5b579ca8f346e8f53926bb65c990
  );
}

export default App;
