import { Button } from "./Button";

const styleWrapper = { 
    padding: "3rem"
} 

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
    },
    decorators: [
        (Story) => (
            <div style={styleWrapper}>
                <Story />
            </div>
        )
    ],
    parameters: {
        backgrounds: {
            values: [
                { name: "light", value: "#eee" },
                { name: "black", value: "#000" },
            ]
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

export const IconLeft = {
    args: {
        type: "primary",
        label: "Button icon",
        disabled: false,
        iconLeft: "search"
    },
}

export const IconRight = {
    args: {
        type: "primary",
        label: "Button icon",
        disabled: false,
        iconRight: "search"
    },
}

export const SecondaryIconRight = {
    args: {
        type: "secondary",
        label: "Button icon",
        disabled: false,
        iconRight: "search"
    },
}