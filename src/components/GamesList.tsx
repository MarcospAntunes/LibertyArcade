/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/components/GamesList.sass'

function GamesList({children}: any): JSX.Element {
    const element = children.length !== 0 ? children : <li>Not Found</li>
    return(
        <ul id='gameList'>
            {element}
        </ul>
    )
}

export default GamesList