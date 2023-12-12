import { gameProps, gamesProps } from "../interfaces/game"
import { allGames, specificGame } from "./api"

type fetchDataProps = {
    setGames?: React.Dispatch<React.SetStateAction<gamesProps[]>> | React.Dispatch<React.SetStateAction<gameProps[]>>
    id?: number
    setGameData?: React.Dispatch<React.SetStateAction<gameProps>>
}

async function fetchDataGames({ setGames }: fetchDataProps) {
    try {
        await Promise.all([
            allGames(setGames!),
        ])
    } catch (error) {
        console.log("Error ao requirir dados: ", error)
    }
}

async function fetchDataGame({ setGameData, id }: fetchDataProps) {
    try {
        await Promise.all([
            specificGame(id!, setGameData!)
        ])
    } catch (error) {
        console.log("Error ao requirir dados: ", error)
    }
}


export {fetchDataGames, fetchDataGame}