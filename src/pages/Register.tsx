/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import FormContainer from "../components/formContainer";
import InputForm from "../components/InputForm";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { handleRegister } from "../utils/validFom";
import '../styles/components/Register.sass'
import ErrorMessage from "../components/ErrorMessage";

function Register() {
    const { register }: any = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [error, setError] = useState("")

    return(
        <main id="mainRegister">
            <FormContainer>
                <h1>Register</h1>
                <Form>
                    <InputForm
                        type="text"
                        placeholder="Type your Name"
                        value={name}
                        required
                        onChange={(e) => [setName(e.target.value), setError("")]}
                    />
                    <InputForm
                        type="email"
                        placeholder="Type your e-mail"
                        value={email}
                        required
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <InputForm
                        type="email"
                        placeholder="Type your e-mail again"
                        value={emailConf}
                        required
                        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                    />
                    <InputForm
                        type="password"
                        placeholder="Type your password"
                        value={password}
                        required
                        onChange={(e) => [setPassword(e.target.value), setError("")]}
                    />
                    <InputForm
                        type="password"
                        placeholder="Type your password again"
                        value={passwordConf}
                        required
                        onChange={(e) => [setPasswordConf(e.target.value), setError("")]}
                    />
                    <InputForm
                        type="submit"
                        value="Register"
                        onClick={(e) => handleRegister({e, email, emailConf, password, passwordConf, name, setError, register, navigate})}
                    />
                </Form>
                <ErrorMessage>{error}</ErrorMessage>
                <p>Alredy have account? <Link to={"/login"}>Click here</Link> and login!</p>
            </FormContainer>
        </main>
    )
}

export default Register;