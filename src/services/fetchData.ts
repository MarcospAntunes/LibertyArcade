import { gameProps, gamesProps } from "../interfaces/game"
import { allGames, relevanceGame, specificGame } from "./api"

type fetchDataProps = {
    setGames?: React.Dispatch<React.SetStateAction<gamesProps[]>> | React.Dispatch<React.SetStateAction<gameProps[]>>
    id?: number
    setGameData?: React.Dispatch<React.SetStateAction<gameProps>>
    setGamePhoto?: React.Dispatch<React.SetStateAction<string>>
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

async function fetchPhotoGame({ setGamePhoto }: fetchDataProps) {
    try {
        await Promise.all([
            relevanceGame(setGamePhoto!)
        ])
    } catch (error) {
        console.log("Error ao requirir dados: ", error)
    }
}


export {fetchDataGames, fetchDataGame, fetchPhotoGame}