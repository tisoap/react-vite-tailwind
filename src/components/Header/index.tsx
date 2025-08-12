import { Link } from "@tanstack/react-router";

export const Header = () => {
	return (
		<header className="border-b border-slate-200">
			<nav className="mx-auto max-w-5xl w-full p-2 flex gap-4">
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
