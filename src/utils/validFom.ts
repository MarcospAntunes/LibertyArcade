/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigateFunction } from "react-router-dom"

interface handleRegisterOrLoginProps {
    e: React.MouseEvent<HTMLInputElement, MouseEvent> 
    email: string
    emailConf?: string
    password: string
    passwordConf?: string
    name?: string
    setError: React.Dispatch<React.SetStateAction<string>>
    register?: any
    login?: any
    navigate: NavigateFunction
}

export const handleLogin = ({ e, setError, email, password, login, navigate }:  handleRegisterOrLoginProps) => {
    e.preventDefault()
    if(!email || !password) {
      setError('Fill in all fields')
      return
    }
    const res = login(email, password)

    if(res) {
      setError(res)
      return
    }
    navigate('/games')
  }

  export const handleRegister = ({ e, email, emailConf, password, passwordConf, name, setError, register, navigate }:  handleRegisterOrLoginProps) => {
    e.preventDefault()
    
    if(!email || !emailConf || !password || !passwordConf || !name) {
      setError("Fill in all fields")
      return
    } else if (email !== emailConf) {
      setError("Emails are not the same")
      return
    } else if (password !== passwordConf) {
      setError("Passwords are not the same")
      return
    }

    const res = register(name, email, password)

    if (res) {
      setError(res)
      return
    }

    alert("User registered successfully!")
    navigate("/login")
  }