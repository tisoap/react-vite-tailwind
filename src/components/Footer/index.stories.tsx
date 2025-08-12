import type { Meta, StoryObj } from "@storybook/react-vite";

import { Footer } from ".";

const meta: Meta<typeof Footer> = {
	component: Footer,
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
	args: {
		children: "Copyright © 2025 Tiso Alvarez Puccinelli",
	},
};
