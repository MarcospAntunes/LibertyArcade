import { useEffect, useState } from "react"
import { fetchPhotoGame } from "../services/fetchData"
import "../styles/components/Banner.sass"

function Banner(): JSX.Element {
    const [ gamePhoto, setGamePhoto ] = useState("");

    useEffect(() => {
        fetchPhotoGame({ setGamePhoto })
    }, []);

    const noPhoto = gamePhoto === "" ? "Error when searching for image" : "";
    
    return(
        <div style={{backgroundImage: `url(${gamePhoto})`}} id="bannerPhoto">
            <h2>{noPhoto}</h2>
        </div>
    )
}


export default Banner;