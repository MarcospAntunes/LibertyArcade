/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { ReactElement, useEffect, useRef, useState } from "react";
import { BsJoystick } from "react-icons/bs";
import "../styles/components/Header.sass";
import { openMenu } from "../utils/menuMobile";
import { IoIosArrowBack } from "react-icons/io"
import useAuth from "../hooks/useAuth";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import defaultUserPhoto from '../assets/images/defaultUserPhoto.jpg'
import switchActionsUser from "../utils/switchActionsUser";

type HeaderProps = {
    back?: boolean
}

function Header({back = false}: HeaderProps): JSX.Element {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const navigete = useNavigate();
    const BackPage = back ? <IoIosArrowBack onClick={() => navigete('/games')} /> : <span></span>;
    const { user, logOut }: any = useAuth();
    const [openProfile, setOpenProfile] = useState(false);
    const [favoriteIcon, setFavoriteIcon] = useState<ReactElement<any, any>>()
    const name = useRef<string>("");
    const photoUrl = useRef<string>("");

    useEffect(() => {
        if(user !== undefined) {
            name.current = user.name;
            photoUrl.current = user.photoUrl;
            switchActionsUser();
            setFavoriteIcon(<MdOutlineFavorite className="favorite" id="isFavorite" onClick={() => navigete('/favorites')} />);
        } else {
            name.current = "New User";
            photoUrl.current = defaultUserPhoto;
            setFavoriteIcon(<MdFavoriteBorder className="favorite" id="noFavorite" onClick={() => navigete('/login')} />);
        }
    }, [navigete, user])
    
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
