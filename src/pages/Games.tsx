/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react"
import fetchData from "../services/fetchData"
import Header from "../components/Header"
import FilterInput from "../components/FilterInput"
import { filterGames } from "../utils/filterGamesFunction"
import { gameProps } from "../interfaces/game"


function Games(): JSX.Element {
    const [ games, setGames ] = useState<gameProps[]>([])
    const [ search, setSearch ] = useState<string[]>([])
    const filtredGames = useRef<Array<object>>([])

    useEffect(() => {
        fetchData({ setGames })
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
                    <section></section>
                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default Games