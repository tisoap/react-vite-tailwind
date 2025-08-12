import type { ComponentProps } from "react";

import { cn } from "@lib/cn";

export type NumberInputProps = Omit<ComponentProps<"input">, "type">;

export const NumberInput = ({ className = "", ...props }: NumberInputProps) => {
	return (
		<input
			className={cn(
				"w-12 text-center border border-slate-200 rounded-md py-2 bg-white",
				className,
			)}
			inputMode="numeric"
			type="number"
			{...props}
		/>
	);
};
