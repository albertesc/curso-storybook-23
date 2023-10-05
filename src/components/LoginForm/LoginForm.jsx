import { PasswordField } from "../PasswordField/PasswordField"
import { TextField } from "../TextField/TextField"
import { Button } from "../Button/Button"
import { PropTypes } from 'prop-types'

import './LoginForm.scss'

export function LoginForm({ handleLogin, handleLogout, logged }) {
    return (
        <>
            {!logged ? (
                <section className="login">
                    <div className="login__container">
                        <h1>Login</h1>
                        <form action={handleLogin}>
                            <TextField label="Email" placeholder="Ej. pepito@gmail.com" name="email" />
                            <PasswordField label="Password" placeholder="Ej. 123456" name="password" />
                            <Button type="button" typeButton="primary" label="Login" />
                        </form>
                    </div>
                </section>
            ) : (
                <section className="login">
                    <div className="login__container">
                        <h1>Estas logeado</h1>
                        <Button onClick={handleLogout} typeButton="primary" label="Logout" />
                    </div>
                </section>
            ) }
        </>
    )
}

LoginForm.propTypes = {
    handleLogin: PropTypes.func,
    handleLogout: PropTypes.func,
    logged: PropTypes.bool
}