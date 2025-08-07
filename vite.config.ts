import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@components": resolve(
				dirname(fileURLToPath(import.meta.url)),
				"src/components",
			),
			"@lib": resolve(dirname(fileURLToPath(import.meta.url)), "src/lib"),
			"@routes": resolve(dirname(fileURLToPath(import.meta.url)), "src/routes"),
			"@assets": resolve(dirname(fileURLToPath(import.meta.url)), "src/assets"),
		},
	},
});
