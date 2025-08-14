import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="flex min-h-screen flex-col">
				<Header />

				<main className="flex flex-1 items-center justify-center">
					<Outlet />
				</main>

				<Footer>Copyright © 2025 Tiso Alvarez Puccinelli</Footer>
			</div>
			<TanStackRouterDevtools />
		</>
	),
});
