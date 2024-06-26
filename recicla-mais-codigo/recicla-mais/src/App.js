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
import Noticias from "./pages/Noticias";
import FaleConosco from "./pages/FaleConosco";
import ConfirmacaoEmail from "./pages/ConfirmacaoEmail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from "./pages/Perfil";
import NoticiaPage from "./pages/NoticiaPage";
import Pontuacao from "./pages/Pontuacao";
import ConfirmaTrocaPontos from "./pages/ConfirmaTrocaPontos";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="alturaMinima">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Agendamento" element={<Agendamento />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/TrocarSenha" element={<TrocarSenha />} />
          <Route path="/ConfirmaAgendamento" element={<ConfirmaAgendamento />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/FaleConosco" element={<FaleConosco />} />
          <Route path="/ConfirmacaoEmail" element={<ConfirmacaoEmail />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Pontuacao" element={<Pontuacao />} />
          <Route path="/ConfirmaTrocaPontos" element={<ConfirmaTrocaPontos />} />
          <Route path="/noticia/:id" element={<NoticiaPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
