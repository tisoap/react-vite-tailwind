import type { Preview } from "@storybook/react-vite";

import "../src/assets/style.css";

const preview: Preview = {
	parameters: {
		a11y: {
			test: "error",
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
