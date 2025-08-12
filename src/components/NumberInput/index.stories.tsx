import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";

import { NumberInput } from ".";

const meta: Meta<typeof NumberInput> = {
	component: NumberInput,
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
	args: {
		"aria-label": "Amount",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = await canvas.findByRole("spinbutton", { name: /amount/i });
		await userEvent.clear(input);
		await userEvent.type(input, "42");
		await expect(input).toHaveValue(42);
	},
	render: (args) => {
		const [value, setValue] = useState(2);
		return (
			<NumberInput
				{...args}
				onChange={(event) => {
					setValue(Number(event.target.value));
				}}
				value={value}
			/>
		);
	},
};
