import { useEffect, useState } from 'react'
import { getPing } from '../../api/api'


const Game = () => {

    const [pong, setPong] = useState("")

    useEffect(() => {
        getPing()
            .then(res => {
                setPong(res.data)
                res.data["balls"].map(
                    (e: any) => {
                        console.log(e)
                    }
                )
            })
            .catch(err =>
                console.log(err)
            )
    }, [])

    return (
        <>
            {JSON.stringify(pong)}
        </>
    )
}

export default Game