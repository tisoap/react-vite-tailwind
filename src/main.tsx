import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@/components/ThemeProvider";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>,
);

if (process.env.NODE_ENV !== "production") {
	void import("@axe-core/react").then((axe) => {
		const timeout = 1000;
		const configuration = undefined;
		const context = { exclude: ".TanStackRouterDevtools" };

		void axe.default(React, ReactDOM, timeout, configuration, context);
	});
}
