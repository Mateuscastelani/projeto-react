import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx'; 
import Sobre from './components/Sobre.jsx'; 
import Contato from './components/Contato.jsx'; 
import './App.css';


function App() {
  return (
    <BrowserRouter>
      {/* Container principal para estilização do layout */}
      <div className="app-container"> 
        <nav className="navbar">
          <div className="logo">
            {/* Você pode substituir pelo seu logo */}
            <span className="logo-text">Plataforma EAD</span>
          </div>
          <div className="nav-links">
            {/* Links usando PascalCase nas rotas */}
            <Link to="/home" className="nav-link"> Home </Link>
            <Link to="/sobre" className="nav-link"> Sobre </Link>
            <Link to="/contato" className="nav-link"> Contato </Link>
          </div>
        </nav>

        {/* Área de conteúdo que irá mudar conforme a rota */}
        <main className="content">
          <Routes>
            {/* Adicionei uma rota raiz (/) que redireciona para /home */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;