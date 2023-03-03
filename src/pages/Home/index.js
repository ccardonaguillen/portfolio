import Hero from '../../layouts/Home/Hero';
import About from '../../layouts/Home/About';
import Contact from '../../layouts/Home/Contact';
import SpinningCarousel from '../../components/SpinningCarousel';
import devItems from '../../assets/devicons';

import './style.css';

export default function Home() {
    return (
        <main id="home">
            <Hero />

            <About />
            <SpinningCarousel>
                {Object.values(devItems).map((item, idx) => (
                    <div key={item.name}>
                        {/* <p className="num">{idx}</p> */}
                        <div>
                            <img alt={item.title} src={item.icon} />
                        </div>
                        <p className="title">{item.title}</p>
                    </div>
                ))}
            </SpinningCarousel>
            <Contact />
        </main>
    );
}
