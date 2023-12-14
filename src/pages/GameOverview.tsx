import { useLocation } from "react-router-dom"
import { gameProps } from "../interfaces/game";
import { useEffect, useState } from "react";
import { fetchDataGame } from "../services/fetchData";
import Header from "../components/Header";
import '../styles/components/GameOverview.sass'
import Button from "../components/Button";

function GameOverview(): JSX.Element {
    const location = useLocation();
    const [gameData, setGameData] = useState<gameProps>({});
    const id: number = location.state;

    useEffect(() => {
        fetchDataGame({setGameData, id});
    }, [id])
    console.log(gameData)

    const photo = gameData.screenshots?.map((screenshot) => screenshot.image) || [""];
    const {
        title,
        release_date,
        description,
        developer,
        game_url,
        genre,
        minimum_system_requirements: {
          os = 'Unknow',
          processor = 'Unknow',
          graphics = 'Unknow',
          memory = 'Unknow',
          storage = 'Unknow',
        } = {},
        platform,
        publisher,
        thumbnail,
      } = gameData || {};
      

    return(
        <>
            <Header />
            <main id="mainGamesOverView">
                <section id="gameSection" style={{backgroundImage: `url(${(photo[0])})`}}>
                </section>

                <section id="gameInfosSection">
                    <div id="gameSectionContent">
                        <div id="containerImgButton">
                            <figure><img src={thumbnail} alt={title} /></figure>
                            <div id="conteinerButtons">
                                <a href={game_url} target="_blank"><Button onClick={() => ""} text="Play"/></a>

                                <Button onClick={() => document.documentElement.scrollTop = document.documentElement.scrollHeight} text="Requirements"/>
                            </div>
                        </div>

                        <div id="content">
                            <h1>{title}</h1>
                            <p>Prepare for {title}</p>
                            <p>{description}</p>
                            <p>Genre: {genre}</p>
                        </div>

                        <aside>
                            <p>{platform}</p>

                            <div id="aboutGame">
                                <div>
                                    <h3>Published by:</h3>
                                    <p>{publisher}</p>
                                </div>
                                <div>
                                    <h3>Developed by:</h3>
                                    <p>{developer}</p>
                                </div>
                            </div>

                            <div id="containerGenreData">
                                <div>
                                    <h3>Genre:</h3>
                                    <p>{genre}</p>
                                </div>
                                <div>
                                    <h3>Release Data (US):</h3>
                                    <p>{release_date}</p>
                                </div>
                            </div>
                        </aside>
                        <div id="systemRequirements">
                                <h2>Minimum System Requirements:</h2>
                                <p><span>OS:</span> {os}</p>
                                <p><span>Processor:</span> {processor}</p>
                                <p><span>Graphics:</span> {graphics}</p>
                                <p><span>Memory:</span> {memory}</p>
                                <p><span>Storage:</span> {storage}</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default GameOverview