import Hero from '../../layouts/Home/Hero';
import About from '../../layouts/Home/About';
import Contact from '../../layouts/Home/Contact';

import './style.css';

function Home() {
    return (
        <main id="home">
            <Hero />
            <About />
            <Contact />
        </main>
    );
}

export default Home;
