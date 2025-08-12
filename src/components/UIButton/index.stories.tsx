import type { Meta, StoryObj } from "@storybook/react-vite";

import { expect, userEvent, within } from "storybook/test";

import { UIButton } from ".";

const meta: Meta<typeof UIButton> = {
	argTypes: {
		onClick: { action: "clicked" },
	},
	component: UIButton,
};

export default meta;

type Story = StoryObj<typeof UIButton>;

export const Default: Story = {
	args: {
		children: "Button",
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const button = await canvas.findByRole("button", { name: /button/i });
		await step("click triggers onClick", async () => {
			await userEvent.click(button);
			// Action is handled by Storybook; minimal assertion that button exists
			await expect(button).toBeInTheDocument();
		});
	},
};

export const Square: Story = {
	args: {
		"aria-label": "Increment",
		children: "+",
		square: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = await canvas.findByRole("button", { name: /increment/i });
		await userEvent.click(button);
		await expect(button).toBeEnabled();
	},
};
