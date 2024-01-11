import '../styles/components/FormContainer.sass'

type FormContainerProps = {
    children: JSX.Element[]
}

function FormContainer({children}: FormContainerProps): JSX.Element {
    return(
        <section id='formContainer'>
            {children}
        </section>
    )
}

export default FormContainer
