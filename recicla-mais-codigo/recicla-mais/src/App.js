import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import TemplateSPA from './pages/TemplateSPA';
import Cadastro from "./pages/Cadastro";
import Agendamento from "./pages/Agendamento";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateSPA/>} />
        <Route path="/src/pages/Cadastro.js" element={<Cadastro/>} />
        <Route path="/src/pages/Agendamento.js" element={<Agendamento/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
