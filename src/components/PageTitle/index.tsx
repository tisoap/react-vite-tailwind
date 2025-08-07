import type { PropsWithChildren } from "react";

export const PageTitle = ({ children }: PropsWithChildren) => {
	return <h1 className="text-3xl font-bold text-slate-800">{children}</h1>;
};
