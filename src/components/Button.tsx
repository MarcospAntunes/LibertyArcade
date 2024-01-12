import '../styles/components/Button.sass'

type ButtonProps = {
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({text, onClick}: ButtonProps): JSX.Element {
    return (
        <button className="btn" onClick={onClick}>{text}</button>
    )
}

export default Button;