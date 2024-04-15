import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import TemplateSPA from './pages/TemplateSPA';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateSPA/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
