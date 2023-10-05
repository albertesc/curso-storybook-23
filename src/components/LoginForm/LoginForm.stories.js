import { LoginForm } from './LoginForm';

export default {
    title: "Components/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "fullscreen",
    }
}

export const LoggedOut = {
    args: {
        logged: false,
    }
}

export const LoggedIn = {
    args: {
        logged: true,
    }
}