/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Form from '../components/Form'
import InputForm from "../components/inputForm";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { handleLogin } from "../utils/validFom";
import '../styles/components/Login.sass'
import FormContainer from "../components/formContainer";
import ErrorMessage from "../components/ErrorMessage";

function Login(): JSX.Element {
    const { login }: any = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    return(
        <main id="mainLogin">
            <FormContainer>
                <h1>Login</h1>
                <Form>
                    <InputForm
                        type="email"
                        placeholder="Type your e-mail"
                        value={email}
                        required
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <InputForm
                        type="password"
                        placeholder="Type your password"
                        value={password}
                        required
                        onChange={(e) => [setPassword(e.target.value), setError("")]}
                    />
                    <InputForm
                        type="submit"
                        value="Login"
                        onClick={(e) => handleLogin({e, setError, email, password, login, navigate})}
                    />
                </Form>
                <ErrorMessage>{error}</ErrorMessage>
                <p>Don't have an account? <Link to={"/register"}>Click here</Link> and create your account for free!</p>
            </FormContainer>
        </main>
    )
}

export default Login;