// @ts-check
import { globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarJs from "eslint-plugin-sonarjs";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";

export default tseslint.config(
	[
		globalIgnores([
			"dist",
			"storybook-static",
			"routeTree.gen.ts",
			"vite.config.ts",
		]),
		{
			files: ["**/*.{ts,tsx}"],
			extends: [
				eslint.configs.recommended,
				tseslint.configs.strictTypeChecked,
				tseslint.configs.stylisticTypeChecked,
				eslintReact.configs["recommended-type-checked"],
				reactHooks.configs["recommended-latest"],
				reactRefresh.configs.vite,
				sonarJs.configs.recommended,
				jsxA11y.flatConfigs.strict,
				perfectionist.configs["recommended-alphabetical"],
			],
			languageOptions: {
				ecmaVersion: "latest",
				globals: globals.browser,
				parserOptions: {
					parser: tseslint.parser,
					projectService: true,
					tsconfigRootDir: import.meta.dirname,
					project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				},
			},
		},
	],
	storybook.configs["flat/recommended"],
	prettier,
);
