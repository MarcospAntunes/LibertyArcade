/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/components/Form.sass'

function Form({children}: any): JSX.Element {
    return(
        <form method="post" id='formLoginRegister'>
            {children}
        </form>
    )
}

export default Form;