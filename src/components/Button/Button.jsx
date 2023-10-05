import { PropTypes } from 'prop-types'
import './Button.scss'
import { Icon } from '../Icon/Icon'

export function Button({ typeButton, label, disabled, iconLeft, iconRight, ...props }) {
    const withIconRith = iconRight ? 'button--icon' : ''
    const classes = ["button", `button--${typeButton}`, withIconRith].join(' ')

    return (
        <button className={classes} disabled={disabled} {...props}>
            {iconLeft && <Icon name={iconLeft} />}
            {label}
            {iconRight && <Icon name={iconRight} />}
        </button>
    )
}

Button.propTypes = {
    /**
     * Property that defines the text of the button. dsadsf asf dfs sdfas
     * 
     * @type {string}
     */
    typeButton: PropTypes.oneOf(['primary', 'secondary']),

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
    disabled: PropTypes.bool,

    iconLeft: PropTypes.string,

    iconRight: PropTypes.string
}

Button.defaultProps = {
    typeButton: 'primary',
    label: 'Click me',
    disabled: false
}