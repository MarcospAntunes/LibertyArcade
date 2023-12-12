import Button from "../components/Button"
import Header from "../components/Header"

import '../styles/components/home.sass'
import { BiSolidJoystick } from 'react-icons/bi'

function Home(): JSX.Element {
    return(
        <>
            <Header />
            <main id="mainHome">
                <section className="sectionHome" id="sectionLeft">
                    <h1>Liberty Arcade</h1>
                    <h2>Games for all</h2>

                    <p>
                        <hr />
                        Liberty Arcade, where fun is free and the freedom to play reigns, offers a unique gaming experience as an invitation to explore a world of entertainment without financial borders.
                    </p>
                    <Button onClick={() => ""} text="Get Started now!" />
                </section>

                <section className="sectionHome" id="sectionRight">
                    <BiSolidJoystick id="joystickAnimate" />
                </section>
            </main>      
        </>
    )
}
    

export default Home