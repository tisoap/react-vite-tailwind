import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="from-background via-background to-muted/20 relative flex min-h-screen flex-col bg-gradient-to-br">
				{/* Decorative background elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="bg-primary/5 absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl" />
					<div className="bg-primary/5 absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl" />
					<div className="bg-primary/3 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
				</div>

				<Header />

				<main className="relative flex flex-1 items-center justify-center p-8">
					<div className="w-full max-w-6xl">
						<Outlet />
					</div>
				</main>

				<Footer>Copyright © 2025 Tiso Alvarez Puccinelli</Footer>
			</div>
			<TanStackRouterDevtools />
		</>
	),
});
