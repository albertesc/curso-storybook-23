import { TextField } from "./TextField";

export default {
    title: "Components/TextField",
    component: TextField,
    tags: ["autodocs"],
}

export const Default = {
    args: {
        placeholder: "Placeholder text",
    },
}

export const WithLabel = {
    args: {
        label: "Label",
        placeholder: "Placeholder text",
    },
}

export const WithError = {
    args: {
        label: "Label",
        placeholder: "Placeholder text",
        error: "Error message",
    },
}

export const Disabled = {
    args: {
        label: "Label",
        placeholder: "Placeholder text",
        disabled: true,
    },
}