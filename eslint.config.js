// @ts-check
import storybook from "eslint-plugin-storybook";
import eslint from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import sonarJs from "eslint-plugin-sonarjs";
import prettier from "eslint-plugin-prettier/recommended";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
	[
		globalIgnores(["dist", "storybook-static", "routeTree.gen.ts"]),
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
