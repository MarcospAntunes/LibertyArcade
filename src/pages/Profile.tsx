/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import '../styles/components/Profile.sass'
import { IoMdArrowBack } from "react-icons/io";
import { deleteAccount, handleInputChange, handlePhotoChange, saveChanges } from '../utils/userActions';
import { useNavigate } from 'react-router-dom';
import defaultPhoto from '../assets/images/defaultUserPhoto.jpg'

function Profile(): JSX.Element {
    const { user }: any = useAuth();
    const { name, email, password, photoUrl } = user;
    const [userData, setUserData] = useState({
        name,
        email,
        password,
        photoUrl
    });
    const navigate = useNavigate();

    return(
        <>
            <header id='headerProfile'>
                <IoMdArrowBack onClick={() => history.back()} />
                <h1>Edit Profile</h1>
                <span></span>
            </header>

            <main id='mainProfile'>
                <section>
                    <div id='photoContainer'>
                        <img src={userData.photoUrl ? userData.photoUrl : defaultPhoto} alt={`Photo of ${name}`} />
                        <label htmlFor='archive' className='buttonChangeEvent'>Change photo</label>
                        <input
                            type='file'
                            accept='image/*'
                            name='archive'
                            onChange={(event) => handlePhotoChange({event, userData, setUserData})}
                            id='archive'
                        />
                    </div>
                    <div>
                        <form>
                            <fieldset>
                                <label>Full name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={userData.name}
                                    onChange={(event) => handleInputChange({event, userData, setUserData})}
                                />
                                <label>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    value={userData.password}
                                    minLength={8}
                                    onChange={(event) => handleInputChange({event, userData, setUserData})}
                                />
                            </fieldset>

                            <fieldset>
                                <label>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={userData.email}
                                    onChange={(event) => handleInputChange({event, userData, setUserData})}
                                />
                            </fieldset>  

                            <input
                                type='submit'
                                value='Save'
                                onClick={() => saveChanges({userData})}
                                className='buttonChangeEvent'
                            />              
                        </form>
                    </div>

                    <div id='dangerZone'>
                        <h2>Danger Zone</h2>
                        <p><strong>ATTENTION:</strong> after deleting the account, it will not be possible to recover it!</p>
                        <button className='buttonChangeEvent' onClick={() => deleteAccount({userData, navigate})}>Delete account</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;