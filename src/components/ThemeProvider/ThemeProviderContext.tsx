import { createContext } from "react";

import type { Theme } from "./types";

export interface ThemeProviderState {
	setTheme: (theme: Theme) => void;
	theme: Theme;
}

export const ThemeProviderContext = createContext<null | ThemeProviderState>(
	null,
);
