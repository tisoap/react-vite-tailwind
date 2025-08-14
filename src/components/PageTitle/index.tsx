import type { PropsWithChildren } from "react";

export const PageTitle = ({ children }: PropsWithChildren) => {
	return <h1 className="text-foreground text-3xl font-bold">{children}</h1>;
};
