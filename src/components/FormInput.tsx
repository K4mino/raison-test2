import React from 'react'

type InputProps = {
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const FormInput: React.FC<InputProps> = ({ value, onChange }: InputProps) => {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input value={value} onChange={onChange} type="text" placeholder="Type here" className="input" />
            {/* <div className="label">
                <span className="label-text-alt">Helper text</span>
            </div> */}
        </label>
    )
}

export default FormInput
