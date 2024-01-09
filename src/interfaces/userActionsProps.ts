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

export type {handleChangeFunctionsProps, saveChangesProps, deleteAccountProps}