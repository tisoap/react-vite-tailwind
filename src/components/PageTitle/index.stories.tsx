import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTitle } from ".";

const meta: Meta<typeof PageTitle> = {
	component: PageTitle,
};

export default meta;

type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
	args: {
		children: "Index Page",
	},
};
