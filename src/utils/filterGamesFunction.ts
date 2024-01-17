import { gameProps } from "../interfaces/game";

type FilterGenreFunctionProps = {
   filter: boolean;
   setFilter: React.Dispatch<React.SetStateAction<boolean>>;
   value: string;
   search: string[];
   setSearch: React.Dispatch<React.SetStateAction<string[]>>;
};

type filterGamesProps = {
  search: string[];
  filtredGames: React.MutableRefObject<object[]>
  games: object[]
}
 
function filterGenreFunction({ filter, setFilter, value, search, setSearch }: FilterGenreFunctionProps): void {
   const updatedSearch = filter
     ? search.filter((genre) => genre !== value)
     : [...search, value];
 
   setSearch(updatedSearch);
   setFilter(!filter);
}

function filterGames({ search, filtredGames, games }: filterGamesProps) {
  if (search.length > 0) {
      filtredGames.current = (games as gameProps[]).filter((game: gameProps) =>
    search.includes(game.genre!.toLowerCase())
  );
  
  } else {
    filtredGames.current = games;
  }

  return filtredGames
}


export {filterGenreFunction, filterGames};
 