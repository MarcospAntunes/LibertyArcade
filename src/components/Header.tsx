/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsJoystick } from "react-icons/bs";
import "../styles/components/Header.sass";
import { openMenu } from "../utils/menuMobile";
import { IoIosArrowBack } from "react-icons/io"
import useUserSwitchActions from "../hooks/useUserSwitchActions";

type HeaderProps = {
    back?: boolean
}

function Header({back = false}: HeaderProps): JSX.Element {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const { 
        favoriteIcon, 
        user, 
        logOut, 
        name, 
        photoUrl, 
        navigete 
    } = useUserSwitchActions();

    const BackPage = back ? <IoIosArrowBack onClick={() => navigete('/games')} /> : <span></span>;
    
    return (
        <header id="headerComponent">
            <div id="logoButtonContainer">
                    <BsJoystick id="logo" onClick={() => navigete("/")} />
                    {BackPage}
            </div>
            <nav id="headerNav" 
                style={{ display: menuVisibility ? 'flex' : 'none', visibility: menuVisibility ? 'visible' : 'hidden' }}>
                <ul id="menuNav">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/games"}>Games</Link></li>
                    </ul>

                    <ul className="loginRegister">
                        <li><Link to={"/login"}>Login</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                    </ul>
                </ul>
            </nav>
            <div id="menu-hamburger" onClick={() => openMenu({ menuVisibility, setMenuVisibility})}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <div id="userContainer">
                {favoriteIcon}
                <picture>
                    <img src={photoUrl.current} alt={name.current} id="photoUser" onClick={() => setOpenProfile((prev) => !prev)}/>
                </picture>
                {openProfile && user !== undefined &&
                    <div id="dropDownProfileContainer">
                        <ul id="dropDownProfile">
                            <li><Link to='/profile'>Profile</Link></li>
                            <li><Link to='/settings'>Settings</Link></li>
                            <li><Link to={"/"} onClick={() => logOut()}>LogOut</Link></li>
                        </ul>
                    </div>    
                } 
            </div>
        </header>
    );
}

export default Header;
