import { useEffect, useState } from "react";
import { gamesProps } from "../interfaces/game";
import { filterGames } from "../utils/filterGamesFunction";

function useFilter() {
    const [ games, setGames ] = useState<gamesProps[]>([]);
    const [ search, setSearch ] = useState<string[]>([]);
    const [filtredGames, setFiltredGames] = useState<Array<gamesProps>>([]);

    useEffect(() => {
        filterGames({ search, setFiltredGames, games });
    }, [search, games])

    return {
        games,
        setGames,
        search, 
        setSearch,
        filtredGames,
        setFiltredGames
    }
}

export default useFilter;