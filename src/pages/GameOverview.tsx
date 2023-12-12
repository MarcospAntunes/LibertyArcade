import { useLocation } from "react-router-dom"
import { gameProps } from "../interfaces/game";
import { useEffect, useState } from "react";
import { fetchDataGame } from "../services/fetchData";
import Header from "../components/Header";
import '../styles/components/GameOverview.sass'

function GameOverview(): JSX.Element {
    const location = useLocation();
    const [gameData, setGameData] = useState<gameProps>({})
    const id: number = location.state;

    useEffect(() => {
        fetchDataGame({setGameData, id})
    }, [id])
    console.log(gameData)

    const photo = gameData.screenshots?.map((screenshot) => screenshot.image) || [""];

    return(
        <>
            <Header />
            <main id="mainGamesOverView">
                <section id="gameSection" style={{backgroundImage: `url(${(photo[0])})`}}>
                </section>

                <section id="gameInfosSection">
                    <div id="gameSectionContent">
                        <figure><img src={gameData.thumbnail} alt={gameData.title} /></figure>
                        <div id="content">
                            <h1>{gameData.title}</h1>
                            <p>Prepare for {gameData.title}</p>
                            <p>{gameData.description}</p>
                            <p>Genre: {gameData.genre}</p>
                        </div>

                        <aside>
                            <div>{gameData.platform}</div>

                            <div id="aboutGame">
                                <div>
                                    <h3>Published by:</h3>
                                    <p>{gameData.publisher}</p>
                                </div>
                                <div>
                                    <h3>Developed by:</h3>
                                    <p>{gameData.developer}</p>
                                </div>
                            </div>

                            <div id="containerGenreData">
                                <div>
                                    <h3>Genre:</h3>
                                    <p>{gameData.genre}</p>
                                </div>
                                <div>
                                    <h3>Release Data (US):</h3>
                                    <p>{gameData.release_date}</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    )
}

export default GameOverview