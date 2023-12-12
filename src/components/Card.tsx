import { gameProps } from "../interfaces/game"
import Button from "./Button"
import '../styles/components/Card.sass'
import { FaWindows } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { TfiLayoutSidebarNone } from "react-icons/tfi";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";


function Card({ id, platform, thumbnail, title}: gameProps): JSX.Element {
    const navigate = useNavigate()
    let PlatormSVG: IconType = TfiLayoutSidebarNone

    if(platform === "PC (Windows)") {
        PlatormSVG = FaWindows
    } else if(platform === "Web Browser") {
        PlatormSVG = BsBrowserEdge
    } else if(platform === "PC (Windows), Web Browser") {
        PlatormSVG = BsBrowserEdge
    }
    
    return(
        <li className="gameCard">
            <picture><img src={thumbnail} alt={title} /></picture>
            <h3>{title}</h3>
            <div>
                <PlatormSVG />
                <Button text="About" onClick={() => navigate(`/game/${title}`, {state: id })} />
            </div>
        </li>
    )
}


export default Card