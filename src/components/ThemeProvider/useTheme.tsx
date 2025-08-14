import { use } from "react";

import { ThemeProviderContext } from "./ThemeProviderContext";

export const useTheme = () => {
	const context = use(ThemeProviderContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
