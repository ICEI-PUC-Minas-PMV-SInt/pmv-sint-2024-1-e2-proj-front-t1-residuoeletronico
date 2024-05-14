import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Agendamento from "./pages/Agendamento";
import Login from './pages/Login';
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TrocarSenha from "./pages/TrocarSenha";
import HomePage from "./pages/HomePage";
import ConfirmaAgendamento from './pages/ConfirmaAgendamento';
<<<<<<< HEAD
import Pontuacao from "./pages/Pontuacao";
=======
import Noticias from "./pages/Noticias";
import Perfil from "./pages/Perfil";
import NoticiaPage from "./pages/NoticiaPage";
>>>>>>> a02675e22b5370ecd272ab5cafb2a6a82ff44aa5

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="alturaMinima">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Agendamento" element={<Agendamento />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/TrocarSenha" element={<TrocarSenha/>} />
          <Route path="/ConfirmaAgendamento" element={<ConfirmaAgendamento />} />
<<<<<<< HEAD
          <Route path="/Pontuacao" element={<Pontuacao />} />
=======
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/NoticiaPage" element={<NoticiaPage />} />
>>>>>>> a02675e22b5370ecd272ab5cafb2a6a82ff44aa5
        </Routes>
      </Container>
      <Footer />
    </Router>
  )}

  export default App
