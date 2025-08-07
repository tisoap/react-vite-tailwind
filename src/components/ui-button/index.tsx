import type { ComponentProps } from "react";

export interface UIButtonProps extends ComponentProps<"button"> {
	square?: boolean;
}

export const UIButton = ({
	className = "",
	square = false,
	type = "button",
	...props
}: UIButtonProps) => {
	const base =
		"rounded-md border border-slate-200 bg-slate-100 hover:bg-slate-200";
	const size = square ? "h-9 w-9 grid place-items-center" : "px-3 py-2";
	return (
		<button type={type} className={`${base} ${size} ${className}`} {...props} />
	);
};
