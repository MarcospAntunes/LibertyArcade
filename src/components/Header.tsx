/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsJoystick } from "react-icons/bs";
import "../styles/components/header.sass";
import { openMenu } from "../utils/menuMobile";
import { IoIosArrowBack } from "react-icons/io"

type HeaderProps = {
    back?: boolean
}

function Header({back = false}: HeaderProps): JSX.Element {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const navigete = useNavigate()
    const BackPage = back ? <IoIosArrowBack onClick={() => navigete('/games')} /> : <span></span>

    return (
        <header>
            <div id="logoButtonContainer">
                <BsJoystick id="logo" onClick={() => navigete("/")} />
                {BackPage}
            </div>

            <div id="menu-hamburger" onClick={() => openMenu({ menuVisibility, setMenuVisibility})}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <nav 
                style={{ display: menuVisibility ? 'flex' : 'none', visibility: menuVisibility ? 'visible' : 'hidden' }}
            >
                <menu id="menuNav">
                    <div>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/games"}>Games</Link></li>
                    </div>

                    <div>
                        <li><Link to={"/login"}>Login</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                    </div>
                </menu>
            </nav>
        </header>
    );
}

export default Header;
