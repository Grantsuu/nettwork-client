import { useEffect, useState } from 'react'
import { getGames } from '../../api/api'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Game = () => {

    const [games, setGames] = useState("")

    useEffect(() => {
        getGames()
            .then(res => {
                setGames(res.data)
            })
            .catch(err =>
                console.log(err)
            )
    }, [])

    return (
        <Container fluid="sm" style={{ color: "white" }}>
            <Row>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                    Nettwork
                </h1>
            </Row>
            <Row>
                <Col style={{display: "flex", justifyContent: "space-between"}}>
                    <h2 style={{display: "flex", justifyContent: "center"}}>
                        Games
                    </h2>
                    <Button variant="primary">
                        New Game
                    </Button>
                </Col>
            </Row>
            <hr style={{ marginBottom: "1rem" }} />
            <Row>
                {JSON.stringify(games)}
            </Row>
        </Container>
    )
}

export default Game