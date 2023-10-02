import { Button } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        type: {
            type: {
                name: "string",
                required: false,
            },
            control: {
                type: "select",
                options: ["primary", "secondary"],
            }
        },
        label: {
            type: {
                name: "string",
                required: true,
            },
        }
    }    
}

/**
 * This button is used for primary actions or calls to action (CTA) in the UI.
 * You can customize its appearance with the `type`, `label`, and `disabled` properties.
 */
export const PrimaryButton = {
    args: {
        type: "primary",
        label: "Primary Button",
    },
}

/**
 * This button is used for secondary actions in the UI.
 * You can customize its appearance with the `type`, `label`, and `disabled` properties.
 */
export const SecondaryButton = {
    args: {
        type: "secondary",
        label: "Secondary Button",
    },
}

/**
 * This button is used when an action is not available at a given moment in the UI.
 * You can customize its appearance with the 'type' and 'label' properties.
 */
export const DisabledButton = {
    args: {
        type: "primary",
        label: "Button Disabled",
        disabled: true,
    },
}