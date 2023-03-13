import axios from "axios"

const host = "http://localhost:8080"

export const getGames = () =>
    axios.get(host + '/games')
        .then(function (res) {
            return res
        })
        .catch(function (err) {
            throw err;
        })
