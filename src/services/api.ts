import { gameProps, gamesProps } from "../interfaces/game";

const url = "https://free-to-play-games-database.p.rapidapi.com/api/game";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fa1b685a43msh06f2d57afab1940p13809djsnbaf5928c7056',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

async function allGames(setGames: React.Dispatch<React.SetStateAction<gamesProps[]>>) {
    try{
        const response = await fetch(`${url}s`, options);
        const data = await response.json();
        setGames(data);
    } catch(error) {
        console.log("Erro ao buscar jogos", error);
    }
}

async function specificGame(id: number, setGameData: React.Dispatch<React.SetStateAction<gameProps>>) {
    
    try {
        const urlGame = `${url}?id=${id}`;
        const response = await fetch(urlGame, options);
        const data = await response.json();
        setGameData(data)
    } catch (error) {
        console.log("Erro ao buscar este jogo", error)
    }
}


export {allGames, specificGame}