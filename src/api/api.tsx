import axios from "axios"

const host = "http://localhost:8080"

export const getPing = () =>
    axios.get(host + '/ping')
        .then(function (res) {
            return res
        })
        .catch(function (err) {
            throw err;
        })
