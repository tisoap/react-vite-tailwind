import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

export interface UIButtonProps extends ComponentProps<"button"> {
	square?: boolean;
}

export const UIButton = ({
	className = "",
	square = false,
	type = "button",
	...props
}: UIButtonProps) => {
	return (
		<button
			type={type}
			className={cn(
				"rounded-md border border-slate-200 bg-slate-100 hover:bg-slate-200",
				{
					"h-9 w-9 grid place-items-center": square,
					"px-3 py-2": !square,
				},
				className,
			)}
			{...props}
		/>
	);
};
