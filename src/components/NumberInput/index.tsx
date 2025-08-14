import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export type NumberInputProps = Omit<ComponentProps<"input">, "type">;

export const NumberInput = ({ className = "", ...props }: NumberInputProps) => {
	return (
		<input
			className={cn(
				"border-primary/10 bg-bg-primary-foreground w-12 rounded-md border py-2 text-center",
				className,
			)}
			inputMode="numeric"
			type="number"
			{...props}
		/>
	);
};
