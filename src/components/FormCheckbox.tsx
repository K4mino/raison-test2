import React from 'react'

const FormCheckbox = ({checked, onChange}: {checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
            <input checked={checked} onChange={onChange} type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text">I agree</span>
        </label>
    </div>
    )
}

export default FormCheckbox