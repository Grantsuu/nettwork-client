import './App.css';
import Game from './components/Game/Game'

const App = () => {
    return (
        <div className="App">
            <h1>
                Nettwork.vb
            </h1>
            <h2>
                Games
            </h2>
            <hr style={{ width: "90%", marginBottom: "1rem" }} />
            <div className="App-content">
                <Game />
            </div>
        </div>
    );
}

export default App;
