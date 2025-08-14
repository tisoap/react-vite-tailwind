import { Link } from "@tanstack/react-router";

import { ModeToggle } from "@/components/ModeToggle";

export const Header = () => {
	return (
		<header className="border-primary/10 border-b">
			<nav className="mx-auto flex w-full max-w-5xl gap-4 p-2">
				<Link className="[&.active]:font-bold" to="/">
					Home
				</Link>
				<Link className="[&.active]:font-bold" to="/counter">
					Counter
				</Link>
				<ModeToggle />
			</nav>
		</header>
	);
};
