import { useEffect, useMemo, useState } from "react";

import type { Theme } from "./types";

import { ThemeProviderContext } from "./ThemeProviderContext";

interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
}

export const ThemeProvider = ({
	children,
	defaultTheme = "system",
	storageKey = "vite-ui-theme",
	...props
}: Readonly<ThemeProviderProps>) => {
	const [theme, setTheme] = useState<Theme>(() => {
		const theme = localStorage.getItem(storageKey);
		if (theme !== "dark" && theme !== "light" && theme !== "system") {
			return defaultTheme;
		}
		return theme;
	});

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const value = useMemo(
		() => ({
			setTheme: (theme: Theme) => {
				localStorage.setItem(storageKey, theme);
				setTheme(theme);
			},
			theme,
		}),
		[theme, storageKey],
	);

	return (
		<ThemeProviderContext {...props} value={value}>
			{children}
		</ThemeProviderContext>
	);
};
