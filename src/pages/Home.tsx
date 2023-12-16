import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"

import '../styles/components/home.sass'
import { BiSolidJoystick } from 'react-icons/bi'

function Home(): JSX.Element {
    const navigate = useNavigate()

    return(
        <>
            <Header />
            <main id="mainHome">
                <section className="sectionHome" id="sectionLeft">
                    <h1>Liberty Arcade</h1>
                    <h2>Games for all</h2>

                    <span>
                        <hr />
                        <p>Liberty Arcade, where fun is free and the freedom to spanlay reigns, offers a unique gaming exspanerience as an invitation to explore a world of entertainment without financial borders.</p>
                    </span>
                    <Button onClick={() => navigate("/register")} text="Get Started now!" />
                </section>

                <section className="sectionHome" id="sectionRight">
                    <BiSolidJoystick id="joystickAnimate" />
                </section>
            </main>      
        </>
    )
}
    

export default Home