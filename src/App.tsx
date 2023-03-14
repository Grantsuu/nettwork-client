import Game from './views/Game/Game'
import Container from 'react-bootstrap/Container'

const App = () => {
    return (
        <Container fluid style={{ background: "#282c34" }}>
            <Game />
        </Container>
    );
}

export default App;
