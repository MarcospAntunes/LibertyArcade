/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigateFunction } from "react-router-dom"

type handleChangeFunctionsProps = {
    event: React.ChangeEvent<HTMLInputElement>
    setUserData: React.Dispatch<React.SetStateAction<{
        name: string
        email: string
        password: string
        photoUrl: string | ArrayBuffer | null
    }>>
    userData: {
        name: string
        email: string
        password: string
        photoUrl: string | ArrayBuffer | null
    }
}

type saveChangesProps = {
    userData: {
        name: string
        email: string
        password: string
        photoUrl: string | ArrayBuffer | null
    }
}

type deleteAccountProps = {
    userData: {
        name: string
        email: string
        password: string
        photoUrl: string | ArrayBuffer | null
    }
    navigate: NavigateFunction
}

function handlePhotoChange({event, userData, setUserData}: handleChangeFunctionsProps) {
    const file = event.target.files![0];

    if(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const photoUrl = e.target!.result;
            setUserData({...userData, photoUrl});

            const userDB = JSON.parse(localStorage.getItem('users_db')!);
            const updatedUsers = userDB.map((u:any) => u.email === userData.email ? {...u, photoUrl}: u);
            localStorage.setItem('users_db', JSON.stringify(updatedUsers));
        };
        reader.readAsDataURL(file);
    }
}

function handleInputChange({event, userData, setUserData}: handleChangeFunctionsProps) {
    const {name, value} = event.target;
    setUserData({
        ...userData,
        [name]: value
    });
}

function saveChanges({userData}: saveChangesProps) {
    const usersDB = JSON.parse(localStorage.getItem('users_db')!)
    const updatedUsers = usersDB.map((u:any) =>
        u.email === userData.email ? userData : u    
    );
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));
    window.location.reload();
}

function deleteAccount({userData, navigate}: deleteAccountProps) {
    const usersDB = JSON.parse(localStorage.getItem('users_db')!) || [];
    const updatedUsers = usersDB.filter((u:any) =>
        u.email !== userData.email
    );
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    navigate('/games');
    window.location.reload();
}


export {handlePhotoChange, handleInputChange, saveChanges, deleteAccount}