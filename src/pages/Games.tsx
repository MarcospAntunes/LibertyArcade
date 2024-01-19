import { useEffect, useState } from "react"
import Header from "../components/Header"
import FilterInput from "../components/FilterInput"
import { gamesProps } from "../interfaces/game"
import GamesList from "../components/GamesList"
import Card from "../components/Card"
import { fetchDataGames } from "../services/fetchData"
import '../styles/components/Games.sass'
import { FaFilter } from "react-icons/fa6";
import openFilter from "../utils/menuFilter"
import Banner from "../components/Banner"
import Pagination from "../components/Pagination"
import usePagination from "../hooks/usePagination"
import useFilter from "../hooks/useFilter"

function Games(): JSX.Element {
    const { filtredGames, setGames, search, setSearch } = useFilter();
    const [ filterVisibility, setFilterVisibility ] = useState(false);
    const { gamesPerPage, currentGames } = usePagination(filtredGames);

    useEffect(() => {
        fetchDataGames({ setGames })
    }, [setGames]);

    return (
        <>
            <Header />
            <main id="mainGames">
                <div id="filterContainer">
                    <FaFilter id="filterIcon" onClick={() => openFilter({ filterVisibility, setFilterVisibility})}/>
                    <aside 
                        id="filterListContainer" 
                        style={
                            { 
                                display: filterVisibility ? 'flex' : 'none', 
                                visibility: filterVisibility ? 'visible' : 'hidden' 
                            }
                        }
                    >
                        <ul>
                                <FilterInput name="Shooter" value="shooter"  search={search} setSearch={setSearch} />
                                <FilterInput name="Strategy" value="strategy"  search={search} setSearch={setSearch} />
                                <FilterInput name="Anime" value="anime"  search={search} setSearch={setSearch} />
                                <FilterInput name="Fantasy" value="fantasy"  search={search} setSearch={setSearch} />
                                <FilterInput name="Sci-Fi" value="sci-fi"  search={search} setSearch={setSearch} />
                                <FilterInput name="Racing" value="racing"  search={search} setSearch={setSearch} />
                                <FilterInput name="MMORPG" value="mmorpg"  search={search} setSearch={setSearch} />
                                <FilterInput name="Social" value="social"  search={search} setSearch={setSearch} />
                                <FilterInput name="Sports" value="sports"  search={search} setSearch={setSearch} />
                        </ul>     
                    </aside>
                </div>
                
                <div id="gamesContainer">
                    <section id="bannerSection">
                        <Banner />
                    </section>
                    <section>
                        <GamesList>
                            {currentGames?.map((game: gamesProps) => (
                                 <Card
                                    key={game.id} 
                                    developer = {game.developer}
                                    game_url = {game.game_url}
                                    genre = {game.genre} 
                                    id = {game.id}
                                    platform = {game.platform} 
                                    publisher = {game.publisher} 
                                    release_date = {game.release_date}
                                    thumbnail = {game.thumbnail}
                                    title = {game.title}
                                />
                            ))}
                        </GamesList>
                        <Pagination
                            totalPages={Math.ceil(filtredGames.length / gamesPerPage)}
                        />
                    </section>
                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default Games;