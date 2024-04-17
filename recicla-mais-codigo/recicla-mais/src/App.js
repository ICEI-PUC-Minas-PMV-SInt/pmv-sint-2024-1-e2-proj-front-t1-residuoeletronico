import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import TemplateSPA from './pages/TemplateSPA';
import Agendamento from "./pages/Agendamento";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agendamento/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
