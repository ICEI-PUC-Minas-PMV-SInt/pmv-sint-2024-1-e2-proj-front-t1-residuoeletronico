import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import TemplateSPA from './pages/TemplateSPA';
import Cadastro from "./pages/Cadastro";
import Agendamento from "./pages/Agendamento";
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
  );
}

export default App;
