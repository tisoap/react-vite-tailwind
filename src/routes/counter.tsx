import { createFileRoute } from "@tanstack/react-router";
import { Calculator, Clock, Minus, Plus, Zap } from "lucide-react";
import { useState } from "react";

import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";

export const Route = createFileRoute("/counter")({
	component: CounterPage,
});

function CounterPage() {
	const [count, setCount] = useState(12);
	const [amount, setAmount] = useState(2);

	const handleIncrement = () => {
		setCount((previousCount) => previousCount + 1);
	};

	const handleDecrement = () => {
		setCount((previousCount) => previousCount - 1);
	};

	const handleAddAmount = () => {
		setCount((previousCount) => previousCount + amount);
	};

	const handleAddAsync = async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setCount((previousCount) => previousCount + amount);
	};

	const handleAddIfOdd = () => {
		setCount((previousCount) =>
			previousCount % 2 !== 0 ? previousCount + amount : previousCount,
		);
	};

	return (
		<div className="mx-auto w-full max-w-4xl space-y-12">
			{/* Header Section */}
			<section className="space-y-4 text-center">
				<PageTitle>Interactive Counter</PageTitle>
				<p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
					Counter to showcase React state management.
				</p>
			</section>

			{/* Main Counter Display */}
			<section className="border-border/50 bg-card/50 rounded-2xl border p-8 backdrop-blur-sm">
				<div className="space-y-8 text-center">
					{/* Counter Display */}
					<div className="space-y-6">
						<div className="flex items-center justify-center gap-8">
							<Button
								aria-label="Decrement"
								className="h-16 w-16 text-2xl transition-transform hover:scale-105"
								onClick={handleDecrement}
								size="icon"
								variant="outline"
							>
								<Minus className="h-6 w-6" />
							</Button>

							<div className="relative">
								<div className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-8xl font-bold text-transparent tabular-nums">
									{count}
								</div>
								<div className="from-primary/50 to-primary absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 transform rounded-full bg-gradient-to-r" />
							</div>

							<Button
								aria-label="Increment"
								className="h-16 w-16 text-2xl transition-transform hover:scale-105"
								onClick={handleIncrement}
								size="icon"
								variant="outline"
							>
								<Plus className="h-6 w-6" />
							</Button>
						</div>
					</div>

					{/* Operations Section */}
					<div className="space-y-6">
						<div className="flex items-center justify-center gap-4">
							<div className="flex items-center gap-3">
								<Calculator className="text-muted-foreground h-5 w-5" />
								<Input
									aria-label="Amount"
									className="w-20 text-center"
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										setAmount(Number(event.target.value));
									}}
									type="number"
									value={amount}
								/>
							</div>
						</div>

						<div className="flex flex-wrap items-center justify-center gap-3">
							<Button
								className="group transition-transform hover:scale-105"
								onClick={handleAddAmount}
							>
								<Calculator className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
								Add Amount
							</Button>

							<Button
								className="group transition-transform hover:scale-105"
								onClick={() => {
									void handleAddAsync();
								}}
								variant="outline"
							>
								<Clock className="mr-2 h-4 w-4 transition-all group-hover:animate-spin" />
								Add Async
							</Button>

							<Button
								className="group transition-transform hover:scale-105"
								onClick={handleAddIfOdd}
								variant="secondary"
							>
								<Zap className="mr-2 h-4 w-4 transition-all group-hover:animate-pulse" />
								Add If Odd
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Info Section */}
			<section className="space-y-4 text-center">
				<div className="bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
					<span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
					Current value: {count} • Amount: {amount}
				</div>
			</section>
		</div>
	);
}
