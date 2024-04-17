import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import TemplateSPA from './pages/TemplateSPA';
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateSPA/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
