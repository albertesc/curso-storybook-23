import { PropTypes } from 'prop-types'
import { Icon } from '../Icon/Icon'
import './Notification.scss'

export function Notification ({ children, status, ...props }) {
    const classes = ["notification", `notification--${status}`].join(' ')

    const TEXT_STATUS = {
        success: 'Confirmado',
        saved: 'Guardado',
        error: 'Error',
        info: 'Información'
    }

    const ICONS_STATUS = {
        success: 'confirmation',
        saved: 'save',
        error: 'error',
        info: 'info'
    }

    return (
        <div className={classes} {...props}>
            <span className='notification__close'>
                <Icon name='close' />
            </span>
            <div className='notification__content'>
                <h3 className='notification__title'>
                    <Icon name={ICONS_STATUS[status]} />
                    {TEXT_STATUS[status]}
                </h3>
                {children}
            </div>
        </div>
    )
}

Notification.propTypes = {
    children: PropTypes.node.isRequired,
    status: PropTypes.oneOf(['success', 'saved', 'error', 'info'])
}

Notification.defaultProps = {
    children: null,
    status: 'info'
}