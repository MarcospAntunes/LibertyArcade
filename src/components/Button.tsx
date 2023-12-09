import '../styles/components/Button.sass'

type ButtonProps = {
    text: string
}

function Button({text}: ButtonProps): JSX.Element {
    return (
        <button className="btn">{text}</button>
    )
}

export default Button