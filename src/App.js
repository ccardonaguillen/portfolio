import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Credits from './layouts/Credits';
import Header from './layouts/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Credits project="portfolio" />
            </BrowserRouter>
        </div>
    );
}

export default App;
