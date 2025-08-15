import { Link } from "@tanstack/react-router";

import { ModeToggle } from "@/components/ModeToggle";

export const Header = () => {
	return (
		<header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center gap-6">
					<Link
						className="text-primary hover:text-primary/80 flex items-center space-x-2 text-xl font-bold transition-colors"
						to="/"
					>
						<div className="from-primary to-primary/60 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
							<span className="text-primary-foreground text-sm font-bold">
								T
							</span>
						</div>
						<span className="hidden sm:inline-block">Template</span>
					</Link>

					<nav className="hidden items-center space-x-6 md:flex">
						<Link
							className="text-muted-foreground hover:text-foreground [&.active]:text-foreground text-sm font-medium transition-colors [&.active]:font-semibold"
							to="/"
						>
							Home
						</Link>
						<Link
							className="text-muted-foreground hover:text-foreground [&.active]:text-foreground text-sm font-medium transition-colors [&.active]:font-semibold"
							to="/counter"
						>
							Counter
						</Link>
					</nav>
				</div>

				<div className="flex items-center gap-4">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};
