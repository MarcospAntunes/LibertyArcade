/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/components/GamesList.sass'

function GamesList({children}: any): JSX.Element {
    return(
        <ul id='gameList'>
            {children}
        </ul>
    )
}

export default GamesList