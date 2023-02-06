import Credits from './layouts/Credits';
import Header from './layouts/Header';
import Home from './pages/Home';

function App() {
    return (
        <div id="app">
            <Header />
            <Home />
            <Credits project="portfolio" />
        </div>
    );
}

export default App;
