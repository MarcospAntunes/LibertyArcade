import { useContext } from "react"
import { FavoritesContext } from "../contexts/favorites"
import { gameProps } from "../interfaces/game"

function useFavorite() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite: gameProps) {
        const repeatedFavorite = favorite.some((item: gameProps) => item.id === newFavorite.id);

        let newList = [...favorite];
        if(!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        newList = favorite.filter((fav: gameProps) => fav.id !== newFavorite.id);

        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite,
    }
}

export {useFavorite};