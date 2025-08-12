import type { ComponentProps } from "react";

import { cn } from "@lib/cn";

export type NumberInputProps = Omit<ComponentProps<"input">, "type">;

export const NumberInput = ({ className = "", ...props }: NumberInputProps) => {
	return (
		<input
			className={cn(
				"w-12 rounded-md border border-slate-200 bg-white py-2 text-center",
				className,
			)}
			inputMode="numeric"
			type="number"
			{...props}
		/>
	);
};
