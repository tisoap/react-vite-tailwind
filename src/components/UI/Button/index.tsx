import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./buttonVariants";

function Button({
	asChild = false,
	className,
	size,
	variant,
	...props
}: {
	asChild?: boolean;
} & React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants>) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(buttonVariants({ className, size, variant }))}
			data-slot="button"
			{...props}
		/>
	);
}

export { Button };
