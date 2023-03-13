import { useEffect, useState } from 'react'
import { getGames } from '../../api/api'


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
        <>
            {JSON.stringify(games)}
        </>
    )
}

export default Game