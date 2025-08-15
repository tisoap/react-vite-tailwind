import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/ThemeProvider/useTheme";
import { Button } from "@/components/UI/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/UI/DropdownMenu";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className="border-border/40 bg-background/80 hover:bg-background/90 relative h-9 w-9 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-105"
					size="icon"
					variant="outline"
				>
					<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="border-border/40 bg-background/95 w-32 backdrop-blur-sm"
			>
				<DropdownMenuItem
					className="hover:bg-accent/50 cursor-pointer transition-colors"
					onClick={() => {
						setTheme("light");
					}}
				>
					<Sun className="mr-2 h-4 w-4" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className="hover:bg-accent/50 cursor-pointer transition-colors"
					onClick={() => {
						setTheme("dark");
					}}
				>
					<Moon className="mr-2 h-4 w-4" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className="hover:bg-accent/50 cursor-pointer transition-colors"
					onClick={() => {
						setTheme("system");
					}}
				>
					<span className="mr-2 h-4 w-4">💻</span>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
