import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

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
			className={cn(
				"border-primary/10 bg-primary-foreground hover:bg-primary/10 rounded-md border",
				{
					"grid h-9 w-9 place-items-center": square,
					"px-3 py-2": !square,
				},
				className,
			)}
			type={type}
			{...props}
		/>
	);
};
