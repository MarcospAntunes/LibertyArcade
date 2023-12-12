/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import FilterInput from "../components/FilterInput"
import { filterGames } from "../utils/filterGamesFunction"
import { gamesProps } from "../interfaces/game"
import GamesList from "../components/GamesList"
import Card from "../components/Card"
import { fetchDataGames } from "../services/fetchData"


function Games(): JSX.Element {
    const [ games, setGames ] = useState<gamesProps[]>([])
    const [ search, setSearch ] = useState<string[]>([])
    const filtredGames = useRef<Array<gamesProps>>([])

    useEffect(() => {
        fetchDataGames({ setGames })
    }, [])

    filterGames({ search, filtredGames, games }) 

    return (
        <>
            <Header />
            <main>
                <aside>
                    <FilterInput name="Shooter" value="shooter"  search={search} setSearch={setSearch} />
                </aside>
                <div>
                    <section></section>
                    <section>
                        <GamesList>
                            {filtredGames.current.map((game: gamesProps) => (
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
                    </section>
                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default Games