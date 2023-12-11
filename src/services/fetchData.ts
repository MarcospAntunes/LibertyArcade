import { gameProps } from "../interfaces/game"
import { allGames } from "./api"

type fetchDataProps = {
    setGames: React.Dispatch<React.SetStateAction<gameProps[]>>
}

async function fetchData({ setGames }: fetchDataProps) {
    try {
        await Promise.all([
            allGames(setGames)
        ])
    } catch (error) {
        console.log("Error ao requirir dados: ", error)
    }
}

export default fetchData