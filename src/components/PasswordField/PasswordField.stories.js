import { PasswordField } from "./PasswordField"

export default {
    title: "Components/PasswordField",
    component: PasswordField,
    tags: ["autodocs"]
}

export const Default = {
    args: {
        placeholder: "Placeholder text",
        disabled: false,
        name: "password",
    }
}

export const WithLabel = {
    args: {
        label: "Label",
        placeholder: "Placeholder text",
        disabled: false,
        name: "password",
    }
}

export const WithError = {
    args: {
        label: "Label",
        placeholder: "Placeholder text",
        error: "Error message",
        disabled: false,
        name: "password",
    }
}