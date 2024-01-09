/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

type FavoritesProviderProps = {
    children: JSX.Element
}

export const FavoritesContext = createContext<any>("")
FavoritesContext.displayName = "myFavorites"

export default function FavoritesProvider({ children }: FavoritesProviderProps) { 
    const [favorite, setFavorite] = useState([])

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}