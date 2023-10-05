import { userEvent, within } from "@storybook/testing-library";
import { Login } from "./Login";

export default {
    title: "Pages/Login",
    component: Login,
    parameters: {
        layout: "fullscreen",
    }
}

export const LoggedOut = {}

export const LoggedIn = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const emailInput = canvas.getByLabelText('Email', { selector: 'input' });
        const passwordInput = canvas.getByLabelText('Password', { selector: 'input' });
        const submitButton = canvas.getByRole('button');

        await userEvent.type(emailInput, "example-email@gmail.com");
        await userEvent.type(passwordInput, "example-password");
        await userEvent.click(submitButton);
    }
}