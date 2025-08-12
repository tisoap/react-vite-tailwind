import { Link } from "@tanstack/react-router";

export const Header = () => {
	return (
		<header className="border-b border-slate-200">
			<nav className="mx-auto flex w-full max-w-5xl gap-4 p-2">
				<Link className="[&.active]:font-bold" to="/">
					Home
				</Link>
				<Link className="[&.active]:font-bold" to="/counter">
					Counter
				</Link>
			</nav>
		</header>
	);
};
