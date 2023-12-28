/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "../components/Card";
import GamesList from "../components/GamesList";
import Header from "../components/Header";
import { useFavorite } from "../hooks/useFavorite";
import { gameProps } from "../interfaces/game";
import '../styles/components/Favorites.sass'

function Favorites(): JSX.Element {
    const { favorite } = useFavorite();

    console.log(favorite.length)

    return(
        <>
            <Header back={true} />
            <main id="mainFavorites">
               {favorite.length > 0 ?
                    <GamesList>
                        {favorite.map((game:gameProps) => (
                            <Card 
                                key={game.id}
                                id={game.id}
                                platform={game.platform}
                                thumbnail={game.thumbnail}
                                title={game.title}
                            />
                        ))}
                    </GamesList>
                :
                    <h1>No Favorite</h1>
                }
            </main>
        </>
    )
}

export default Favorites;