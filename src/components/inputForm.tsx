import '../styles/components/InputForm.sass'

type inputFormProps = {
    type: React.HTMLInputTypeAttribute
    placeholder?: string
    value: string | number | readonly string[]
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    required?: boolean
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined

}

function InputForm({ type, placeholder, value, onChange, required = false, onClick }: inputFormProps): JSX.Element {
    return(
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} onClick={onClick} className="inputForm"  />
    )
}

export default InputForm;