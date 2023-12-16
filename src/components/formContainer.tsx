/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/components/FormContainer.sass'

function FormContainer({children}: any): JSX.Element {
    return(
        <section id='formContainer'>
            {children}
        </section>
    )
}

export default FormContainer