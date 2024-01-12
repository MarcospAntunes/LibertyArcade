import { createContext, useState, useEffect } from 'react'
import userProps from '../interfaces/user'

type AuthProviderProps = {
    children: JSX.Element
}

const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<userProps | null>();

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_db');

        if(userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter((user: userProps) => user.email === JSON.parse(userToken).email);

            if(hasUser) setUser(hasUser[0])
        }
    }, []);

    const login = (email: string, password: string) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db')!);
        
        const hasUser = usersStorage?.filter((user: userProps) => user.email === email);

        if(hasUser?.length) {
            if(hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(26).substring(2);
                localStorage.setItem('user_token', JSON.stringify({email, token}));
                return
            } else {
                return "Incorrect email or password"
            }
        } else {
            return "Unregistered user"
        }
    };

    const register = (name: string, email: string, password: string) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db')!);
        const hasUser = usersStorage?.filter((user: userProps) => user.email === email);

        if(hasUser?.length) {
            return "There is an account with that email address!"
        }

        let newUser;

        usersStorage ? newUser = [...usersStorage, {name, email, password}] : newUser = [{name, email, password}];

        localStorage.setItem('users_db', JSON.stringify(newUser));

        return
    }

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('user_token');
        window.location.reload();
    };

    return( 
        <AuthContext.Provider value={{user, signed: !!user, login, register, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};