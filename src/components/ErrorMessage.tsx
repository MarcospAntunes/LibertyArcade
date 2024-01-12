import '../styles/components/ErrorMessage.sass'

type ErrorMessageProps = {
    children: string
}
function ErrorMessage({children}: ErrorMessageProps): JSX.Element {
    return(
        <p id="errorMessage">{children}</p>
    )
}

export default ErrorMessage;