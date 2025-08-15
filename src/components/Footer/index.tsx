import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => {
	return (
		<footer className="border-border/40 bg-background/50 supports-[backdrop-filter]:bg-background/30 border-t py-8 text-center backdrop-blur">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center gap-4">
					<div className="via-border h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
					<p className="text-muted-foreground text-sm font-medium">
						{children}
					</p>
					<div className="text-muted-foreground/60 flex items-center gap-2 text-xs">
						<span>Built with</span>
						<span className="text-primary">❤️</span>
						<span>and modern web technologies</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
