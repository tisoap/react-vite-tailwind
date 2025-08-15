import type { PropsWithChildren } from "react";

export const PageTitle = ({ children }: PropsWithChildren) => {
	return (
		<h1 className="from-foreground via-foreground/90 to-foreground/70 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
			{children}
		</h1>
	);
};
