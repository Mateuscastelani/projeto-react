import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';

function Blog() {
    return (  
        <Router>
            <header>
                <h1>Meu Blog Pessoal</h1>
                <nav>
                    <ul>
                        <li><Link to="/Home">Inicio</Link></li>
                        <li><Link to="/Sobre">Sobre</Link></li>
                        <li><Link to="/Contato">Contato</Link></li>
                    </ul>
                </nav>
                </header>
                <main>
                    <Routes>   
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Sobre" element={<Sobre />} />
                        <Route path="/Contato" element={<Contato />} />
                    </Routes>
                </main>
            <footer>
                <p>© 2024 Meu Blog Pessoal. Todos os direitos reservados.</p>
            </footer>
        </Router>
    );
}

export default Blog;

            