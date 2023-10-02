import { PropTypes } from 'prop-types'
import './Button.scss'

export function Button({ type, label, disabled, ...props }) {
    return (
        <button className={`button button--${type}`} disabled={disabled} {...props}>{label}</button>
    )
}

Button.propTypes = {
    /**
     * Property that defines the text of the button. dsadsf asf dfs sdfas
     * 
     * @type {string}
     */
    type: PropTypes.oneOf(['primary', 'secondary']),

    /**
     * Property that determines the button type, which can be "primary" or "secondary".
     * 
     * @type {string}
     * @required
     */
    label: PropTypes.string.isRequired,

    /**
     * Property that indicates whether the button is disabled or not.
     * 
     * @type {boolean}
     * @optional
     */
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: 'primary',
    label: 'Click me',
    disabled: false
}