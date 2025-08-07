import { Link } from "@tanstack/react-router";

export const Header = () => {
	return (
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
	);
};
