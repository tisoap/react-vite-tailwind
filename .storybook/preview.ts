import type { Preview } from "@storybook/react-vite";

import "../src/assets/style.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: "error",
		},
	},
};

export default preview;
