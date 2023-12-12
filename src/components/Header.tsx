import { Link } from "react-router-dom";
import { useState } from "react";
import { BsJoystick } from "react-icons/bs";
import "../styles/components/header.sass";
import { openMenu } from "../utils/menuMobile";

function Header(): JSX.Element {
    const [menuVisibility, setMenuVisibility] = useState(false);
    return (
        <header>
            <BsJoystick id="logo" />
            <div id="menu-hamburger" onClick={() => openMenu({ menuVisibility, setMenuVisibility})}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <nav 
                style={{ display: menuVisibility ? 'flex' : 'none', visibility: menuVisibility ? 'visible' : 'hidden' }}
            >
                <menu>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/games"}>Games</Link></li>
                </menu>
            </nav>
        </header>
    );
}

export default Header;
