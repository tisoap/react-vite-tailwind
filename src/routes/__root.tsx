import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="min-h-screen bg-gray-100 text-slate-800 flex flex-col">
				<Header />

				<main className="flex-1 flex items-center justify-center">
					<Outlet />
				</main>

				<Footer>Copyright © 2025 Tiso Alvarez Puccinelli</Footer>
			</div>
			<TanStackRouterDevtools />
		</>
	),
});
