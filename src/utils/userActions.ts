import userProps from "../interfaces/user";
import { deleteAccountProps, handleChangeFunctionsProps, saveChangesProps } from "../interfaces/userActionsProps";

function handlePhotoChange({event, userData, setUserData}: handleChangeFunctionsProps) {
    const file = event.target.files![0];

    if(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const photoUrl = e.target!.result;
            setUserData({...userData, photoUrl});

            const userDB = JSON.parse(localStorage.getItem('users_db')!);
            const updatedUsers = userDB.map((u:userProps) => u.email === userData.email ? {...u, photoUrl}: u);
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

function saveChanges({userData, navigate}: saveChangesProps) {
    const usersDB = JSON.parse(localStorage.getItem('users_db')!)
    const updatedUsers = usersDB.map((u:userProps) =>
        u.email === userData.email ? userData : u    
    );
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    navigate('/games');
    window.location.reload();
}

function deleteAccount({userData, navigate}: deleteAccountProps) {
    const usersDB = JSON.parse(localStorage.getItem('users_db')!) || [];
    const updatedUsers = usersDB.filter((u:userProps) =>
        u.email !== userData.email
    );
    localStorage.setItem('users_db', JSON.stringify(updatedUsers));

    navigate('/games');
    window.location.reload();
}


export {handlePhotoChange, handleInputChange, saveChanges, deleteAccount}