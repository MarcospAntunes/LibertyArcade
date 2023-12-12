import { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { filterGenreFunction } from "../utils/filterGamesFunction";

type FilterInputProps = {
   name: string | undefined
   value: string
   search: string[]
   setSearch: React.Dispatch<React.SetStateAction<string[]>>
}


function FilterInput({ name, value, search, setSearch }: FilterInputProps): JSX.Element {
   const [filter, setFilter] = useState(false);
 
   const handleCheckboxClick = () => {
     setFilter((prevFilter) => !prevFilter);
     filterGenreFunction({ filter, setFilter, value, search, setSearch });
   };
 
   const checkbox = filter ? (
     <IoCheckbox onClick={handleCheckboxClick} />
   ) : (
     <MdCheckBoxOutlineBlank onClick={handleCheckboxClick} />
   );
 
   return (
     <span>
       {checkbox} {name}
     </span>
   );
 }
 

export default FilterInput