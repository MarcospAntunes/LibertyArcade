import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import '../styles/components/Page404.sass'

function Page404(): JSX.Element {
    const navigate = useNavigate();

    return(
        <>
            <header id="header404">
                <h1>404</h1>
            </header>

            <main id="main404">
                <section>
                    <h2>Something is Wrong :(</h2>
                    <p>This page is currently inaccessible or does not exist. If this page exists, contact support.</p>

                    <Button text="Back to catalog" onClick={() => navigate('/games')}  />
                </section>
            </main>
        </>
    )
}

export default Page404;