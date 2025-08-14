import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => {
	return (
		<footer className="border-primary/10 text-muted-foreground border-t py-4 text-center text-xs">
			{children}
		</footer>
	);
};
