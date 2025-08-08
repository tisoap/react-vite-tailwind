import storybook from "eslint-plugin-storybook";
import eslint from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import sonarJs from "eslint-plugin-sonarjs";

export default tseslint.config(
	[
		globalIgnores(["dist", "routeTree.gen.ts"]),
		{
			files: ["**/*.{ts,tsx}"],
			extends: [
				eslint.configs.recommended,
				tseslint.configs.strictTypeChecked,
				tseslint.configs.stylisticTypeChecked,
				reactHooks.configs["recommended-latest"],
				reactRefresh.configs.vite,
				sonarJs.configs.recommended,
			],
			languageOptions: {
				ecmaVersion: 2020,
				globals: globals.browser,
				parserOptions: {
					projectService: true,
					tsconfigRootDir: import.meta.dirname,
				},
			},
		},
	],
	storybook.configs["flat/recommended"],
);
