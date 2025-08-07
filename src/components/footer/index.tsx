import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => {
	return (
		<footer className="border-t border-slate-200 text-center py-4 text-xs text-slate-500">
			{children}
		</footer>
	);
};
