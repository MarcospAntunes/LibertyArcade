import { gameProps, gamesProps } from "../interfaces/game";

type FilterGenreFunctionProps = {
   filter: boolean;
   setFilter: React.Dispatch<React.SetStateAction<boolean>>;
   value: string;
   search: string[];
   setSearch: React.Dispatch<React.SetStateAction<string[]>>;
};

type filterGamesProps = {
  search: string[];
  setFiltredGames: React.Dispatch<React.SetStateAction<gamesProps[]>>
  games: object[]
}
 
function filterGenreFunction({ filter, setFilter, value, search, setSearch }: FilterGenreFunctionProps): void {
   const updatedSearch = filter
     ? search.filter((genre) => genre !== value)
     : [...search, value];
 
   setSearch(updatedSearch);
   setFilter(!filter);
}

function filterGames({ search, setFiltredGames, games }: filterGamesProps) {
  if (search.length > 0) {
    const filtredGames = (games: gameProps[]) =>
    games.filter((game: gameProps) =>
      game.genre && search.includes(game.genre.toLowerCase()))
    setFiltredGames(filtredGames(games))
  
  } else {
    setFiltredGames(games);
  }

  return setFiltredGames
}


export {filterGenreFunction, filterGames};
 