import Hero from './Hero';
import TextSection from '../../components/TextSection';
import Contact from './Contact';
import SpinningCarousel from '../../components/SpinningCarousel';
import devItems from '../../assets/devicons';

import './style.css';

export default function Home() {
    return (
        <main id="home">
            <Hero />
            <TextSection
                id="home-about"
                alignment="right"
                heading="Who am I?"
                decoration={<img src="#" alt="" />}
            >
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis. At in
                    tellus integer feugiat scelerisque varius. Nec feugiat in fermentum posuere urna
                    nec tincidunt praesent semper. Eu scelerisque felis imperdiet proin fermentum
                    leo vel orci.
                </p>
                <p className="paragraph">
                    Ultricies integer quis auctor elit sed vulputate mi sit amet. Hac habitasse
                    platea dictumst quisque sagittis purus sit. Morbi tincidunt augue interdum velit
                    euismod in pellentesque massa. Mauris pellentesque pulvinar pellentesque
                    habitant morbi tristique senectus et netus. Eu tincidunt tortor aliquam nulla
                    facilisi cras fermentum.
                </p>
            </TextSection>{' '}
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
