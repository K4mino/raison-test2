import React from 'react'

const FormInput = ({value,onChange}) => {
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
