import { LoginForm } from '../components/LoginForm/LoginForm';
import { useState } from 'react';

export function Login() {
    const [loggin, setLoggin] = useState(false)

    return (
        <LoginForm
            handleLogin={() => {
                setLoggin(true)
            }}
            handleLogout={() => setLoggin(false)}
            logged={loggin} 
        />
    )
}