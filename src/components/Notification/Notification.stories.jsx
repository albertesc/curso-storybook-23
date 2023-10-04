import { Notification } from "./Notifcation"
import { Button } from "../Button/Button"

export default {
    title: 'Components/Notification',
    component: Notification,
    tags: ['autodocs'],
    args: {
        status: 'info'
    },
    argTypes: {
        status: {
            control: {
                type: 'select',
                options: ['success', 'saved', 'error', 'info']
            }
        }
    }
}

export const Info = {
    render: (args) => (
        <Notification {...args}>
            <p>Aviso informativo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button iconLeft="confirmation" label="Aceptar" />
        </Notification>
    )
}

export const Error = {
    render: () => (
        <Notification status="error">
            <p>Error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button iconLeft="confirmation" label="Aceptar" />
        </Notification>
    )
}

export const Success = {
    render: () => (
        <Notification status="success">
            <p>Confirmado. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button iconLeft="confirmation" label="Aceptar" />
        </Notification>
    )
}

export const Saved = {
    render: () => (
        <Notification status="saved">
            <p>Guardado Aviso de guardado. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button iconLeft="view" label="Ver detalle" />
        </Notification>
    )
}