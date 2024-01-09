import '../styles/components/Form.sass'

type FormProps = {
    children: JSX.Element[]
}

function Form({children}: FormProps): JSX.Element {
    return(
        <form method="post" id='formLoginRegister'>
            {children}
        </form>
    )
}

export default Form;