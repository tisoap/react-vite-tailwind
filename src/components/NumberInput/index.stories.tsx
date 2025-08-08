import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "storybook/test";
import { useState } from "react";
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
	render: (args) => {
		const [value, setValue] = useState(2);
		return (
			<NumberInput
				{...args}
				value={value}
				onChange={(event) => setValue(Number(event.target.value))}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = await canvas.findByRole("spinbutton", { name: /amount/i });
		await userEvent.clear(input);
		await userEvent.type(input, "42");
		await expect(input).toHaveValue(42);
	},
};
