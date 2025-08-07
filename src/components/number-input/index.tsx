import type { ComponentProps } from "react";

export type NumberInputProps = Omit<ComponentProps<"input">, "type">;

export const NumberInput = ({ className = "", ...props }: NumberInputProps) => {
	return (
		<input
			type="number"
			className={`w-12 text-center border border-slate-200 rounded-md py-2 bg-white ${className}`}
			inputMode="numeric"
			{...props}
		/>
	);
};
