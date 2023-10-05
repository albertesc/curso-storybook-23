import { PropTypes } from 'prop-types'
import './TextField.scss'

export function TextField ({label, placeholder, disabled, error, name, ...props}) {
    const haveError = error ? 'text-field--error' : ''
    const isDisabled = disabled ? 'text-field--disabled' : ''

    return (
        <div className={["text-field", haveError, isDisabled].join(' ')}>
            {label && <label htmlFor={name} className='text-field__label'>{label}</label>}
            <input className='text-field__input' type="text" id={name} name={name} placeholder={placeholder} disabled={disabled} {...props} />
            {error && <span className='error'>{error}</span>}
        </div>
    )
}

TextField.propTypes = {
    /**
     * Property that defines the label or text associated with the input field.
     * 
     * @type {string}
     * @optional
     */
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    /**
     * Property that defines the label or text associated with the input field.
     * 
     * @type {string}
     * @required
     */
    name: PropTypes.string.isRequired
}

TextField.defaultProps = {
    disabled: false,
}