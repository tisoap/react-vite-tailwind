import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-screen bg-gray-100 text-slate-800 flex flex-col">
			<header className="border-b border-slate-200">
				<nav className="mx-auto max-w-5xl w-full p-2 flex gap-4">
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>
					<Link to="/counter" className="[&.active]:font-bold">
						Counter
					</Link>
				</nav>
			</header>

			<main className="flex-1 flex items-center justify-center">
				<Outlet />
			</main>

			<footer className="border-t border-slate-200 text-center py-4 text-xs text-slate-500">
				Copyright © 2025 Tiso Alvarez Puccinelli
			</footer>
		</div>
	),
});
