/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

export const FavoritesContext = createContext<any>("")
FavoritesContext.displayName = "myFavorites"

export default function FavoritesProvider({ children }: any) { 
    const [favorite, setFavorite] = useState([])

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}