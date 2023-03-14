import { useEffect, useState } from 'react'
import { getGames } from '../../api/api'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Game = () => {

    const [games, setGames] = useState<any>([])

    useEffect(() => {
        getGames()
            .then(res => {
                setGames(res.data.data)
            })
            .catch(err =>
                console.log(err)
            )
    }, [])

    games.map((game: any) => {
        console.log(game)
    })

    return (
        <Container fluid="sm" style={{ color: "white" }}>
            <Row>
                <h1 className="display-3" style={{ display: "flex", justifyContent: "center" }}>
                    Nettwork
                </h1>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <h2 style={{ display: "flex", justifyContent: "center", margin: 0 }}>
                        Games
                    </h2>
                </Col>
                <Col style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="primary">
                        Create Game
                    </Button>
                </Col>
            </Row>
            <hr style={{ marginBottom: "1rem" }} />
            <Row style={{display: "flex", justifyContent:"center", color: "black" }}>
                {games.map((game: any) => {
                    return (
                        <Col key={game.id} lg={3} sm={6}>
                            <Card>
                                <Card.Header as="h5"><Row><Col  md={9}>{game.title}</Col><Col style={{textAlign: "right"}}>0/{game.max}</Col></Row></Card.Header>
                                <Card.Img src="https://picsum.photos/800" style={{display: "flex", height:"15rem", objectFit:"cover"}}/>
                                <Card.Body>
                                    <Card.Title>{game.variant} - {game.location}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{game.owner}</Card.Subtitle>
                                    <Card.Text>{game.date}</Card.Text>
                                    <Card.Text>{game.description}</Card.Text>
                                    <Card.Text style={{display:"flex", justifyContent:"flex-end"}}>
                                        <Button variant="outline-danger" style={{marginRight: "0.25rem"}}>Delete</Button>
                                        <Button>Join Game</Button>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">{game.date}</Card.Footer>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Game