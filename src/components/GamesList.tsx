/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/components/GamesList.sass'

function GamesList({children}: any): JSX.Element {
    const element = children.length !== 0 ? children : <li>Unable to load games or no games found</li>;
    return(
        <ul id='gameList'>
            {element}
        </ul>
    )
}

export default GamesList;