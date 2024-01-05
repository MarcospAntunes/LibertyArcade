import { gameProps, gamesProps } from "../interfaces/game";
import { numberToFourHundred } from "../utils/aleatoryNumber";

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

async function relevanceGame(setGamePhoto: React.Dispatch<React.SetStateAction<string>>) {
    try {
        const responseId = await fetch(`${url}s?sort-by=relevance`, options);
        const dataId = await responseId.json();
        const responsePhoto = await fetch(`${url}?id=${dataId[numberToFourHundred].id}`, options);
        const dataPhoto = await responsePhoto.json()
        setGamePhoto(dataPhoto.screenshots[0].image)
    } catch (error) {
        console.error("Não foi possível obter dados do jogo ", error);
    }
}


export {allGames, specificGame, relevanceGame}