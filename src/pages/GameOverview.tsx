/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom"
import { gameProps } from "../interfaces/game";
import { useEffect, useState } from "react";
import { fetchDataGame } from "../services/fetchData";
import Header from "../components/Header";
import '../styles/components/GameOverview.sass'
import Button from "../components/Button";
import { useFavorite } from "../hooks/useFavorite";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

function GameOverview(): JSX.Element {
    const location = useLocation();
    const [gameData, setGameData] = useState<gameProps>({});
    const { favorite, addFavorite } = useFavorite()

    const id: number = location.state;
    const isFavorite = favorite.some((fav: any) => fav.id === id)

    useEffect(() => {
        fetchDataGame({setGameData, id});
    }, [id])

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

      const FavoriteIcon = isFavorite 
        ?   <MdOutlineFavorite 
                className="favorite" 
                id="isFavorite" 
                onClick={() => addFavorite({ id, platform, thumbnail, title })} 
            /> 
        :   <MdFavoriteBorder 
                className="favorite" 
                id="noFavorite" 
                onClick={() => addFavorite({ id, platform, thumbnail, title })} 
            />
      
    return(
        <>
            <Header back={true}/>
            <main id="mainGamesOverView">
                <section id="gameSection" style={{backgroundImage: `url(${(photo[0])})`}} />
                <section id="gameInfosSection">
                    <div id="gameSectionContent">
                        <div id="containerImgButton">
                            <figure><img src={thumbnail} alt={title} /></figure>
                            <div id="conteinerButtons">
                                <a href={game_url} target="_blank"><Button onClick={() => ""} text="Play"/></a>

                                <Button onClick={() => document.documentElement.scrollTop = document.documentElement.scrollHeight} text="Requirements"/>
                                {FavoriteIcon}
                            </div>
                        </div>

                        <article id="content">
                            <h1>{title !== null ? title : "Unknow"}</h1>
                            <h4>Prepare for {title !== null ? title : "Unknow"}</h4>
                            <p>{description !== null ? description : "Unknow"}</p>
                            <p>Genre: {genre !== null ? genre : "Unknow"}</p>
                        </article>

                        <aside>
                            <p>{platform !== null ? platform : "Unknow"}</p>

                            <div id="aboutGame">
                                <div>
                                    <h3>Published by:</h3>
                                    <p>{publisher !== null ? publisher : "Unknow"}</p>
                                </div>
                                <div>
                                    <h3>Developed by:</h3>
                                    <p>{developer !== null ? publisher : "Unknow"}</p>
                                </div>
                            </div>

                            <div id="containerGenreData">
                                <div>
                                    <h3>Genre:</h3>
                                    <p>{genre !== null ? genre : "Unknow"}</p>
                                </div>
                                <div>
                                    <h3>Release Data (US):</h3>
                                    <p>{release_date !== null ? release_date : "Unknow"}</p>
                                </div>
                            </div>
                        </aside>
                        <div id="systemRequirements">
                                <h2>Minimum System Requirements:</h2>
                                <p><span>OS:</span> {os !== null ? os : "Unknow"}</p>
                                <p><span>Processor:</span> {processor !== null ? processor : "Unknow"}</p>
                                <p><span>Graphics:</span> {graphics !== null ? graphics : "Unknow"}</p>
                                <p><span>Memory:</span> {memory !== null ? memory : "Unknow"}</p>
                                <p><span>Storage:</span> {storage !== null ? storage : "Unknow"}</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default GameOverview