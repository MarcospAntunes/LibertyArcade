/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useEffect, useRef, useState } from "react";
import switchActionsUser from "../utils/switchActionsUser";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import defaultUserPhoto from '../assets/images/defaultUserPhoto.jpg'
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

function useUserSwitchActions() {
    const [favoriteIcon, setFavoriteIcon] = useState<ReactElement<any, any>>()
    const { user, logOut }: any = useAuth();
    const name = useRef<string>("");
    const photoUrl = useRef<string>("");
    const navigete = useNavigate();

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

    return {
        favoriteIcon,
        setFavoriteIcon,
        user,
        logOut,
        name,
        photoUrl,
        navigete
    }
}

export default useUserSwitchActions;