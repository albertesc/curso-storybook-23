import { Icon } from '../Icon/Icon'
import PropType from 'prop-types'
import { useState } from 'react'
import './PasswordField.scss'

export function PasswordField({label, placeholder, error, name, ...props}) {
    const [visible, setVisible] = useState(false)
    const handleClickVisible = () => setVisible((visible) => !visible);

    return (
        <div className={["password-field", error ? "password-field--error" : ""].join(" ")}>
            {label && <label htmlFor={name} className="text-field__label">{label}</label>}
            <div className="password-field__wrapper">
                <input className="password-field__input" id={name} type={visible ? "text" : "password"} placeholder={placeholder} {...props} />
                <span onClick={handleClickVisible} className="password-field__toggle">
                    {visible 
                        ? (<Icon name="viewSlash" className="password-field__icon" />)
                        : (<Icon name="view" className="password-field__icon" />)
                    }
                </span>
            </div>
            {error && <span className="error">{error}</span>}
        </div>
    )
}

PasswordField.propTypes = {
    label: PropType.string,
    placeholder: PropType.string,
    error: PropType.string,
    name: PropType.string.isRequired
}