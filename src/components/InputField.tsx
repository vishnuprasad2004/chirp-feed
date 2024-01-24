

interface InputFieldProps {
    type:string,
    label:string

}

const InputField:React.FC<InputFieldProps> = ({ type, label }) => {
    return (
        <div className="m-4 ">
            <fieldset>
                <legend className="pl-4 text-sm">{label}</legend>
                <input type={type} placeholder={"Enter your " + label.toLowerCase() + " here..."} name="input" className="w-64 m-1 rounded-xl p-2 bg-neutral-900 focus:border-none active::border-none"/>
            </fieldset>
        </div>
    )
}

export default InputField