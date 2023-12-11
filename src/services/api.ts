import { gameProps } from "../interfaces/game";

const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fa1b685a43msh06f2d57afab1940p13809djsnbaf5928c7056',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

async function allGames(setGames: React.Dispatch<React.SetStateAction<gameProps[]>>) {
    try{
        const response = await fetch(url, options)
        const data = await response.json()
        setGames(data)
    } catch(error) {
        console.log("Erro ao buscar jogos", error)
    }
}

export {allGames}