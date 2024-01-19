import { useEffect, useState } from "react";
import { gamesProps } from "../interfaces/game";

function usePagination(filtredGames?: gamesProps[]) {
    const [currentPage, setCurrentPage] = useState<string | number>(1);
    const gamesPerPage = 15;
    const [indexOfLastGame, setIndexOfLastGame] = useState(0)
    const [indexOfFirstGame, setIndexOfFirstGame] = useState(0)
    const [currentGames, setCurrentGames] = useState<gamesProps[] | undefined>([])
    const maxPagesToShow = 9;

    const onPageChange = (pageNumber: string | number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setIndexOfLastGame(Number(currentPage) * gamesPerPage)
        setIndexOfFirstGame(indexOfLastGame - gamesPerPage)
        setCurrentGames(filtredGames?.slice(indexOfFirstGame, indexOfLastGame)) 
    }, [currentPage, filtredGames, indexOfFirstGame, indexOfLastGame])

    return {
        currentPage,
        gamesPerPage,
        indexOfLastGame,
        setIndexOfLastGame,
        indexOfFirstGame,
        setIndexOfFirstGame,
        currentGames,
        setCurrentGames,
        onPageChange,
        maxPagesToShow
    }
}

export default usePagination;