import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => {
	return (
		<footer className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
			{children}
		</footer>
	);
};
