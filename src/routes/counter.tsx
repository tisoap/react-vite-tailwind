import { createFileRoute } from "@tanstack/react-router";
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
		<div className="mx-auto w-full max-w-xl text-center">
			<PageTitle>Counter</PageTitle>
			<div className="h-4" />

			<div className="mb-8 flex items-center justify-center gap-8">
				<Button aria-label="Decrement" onClick={handleDecrement} size="icon">
					−
				</Button>
				<div className="text-6xl font-semibold tabular-nums">{count}</div>
				<Button aria-label="Increment" onClick={handleIncrement} size="icon">
					+
				</Button>
			</div>

			<div className="flex items-center justify-center gap-3">
				<Input
					aria-label="Amount"
					className="w-20"
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setAmount(Number(event.target.value));
					}}
					type="number"
					value={amount}
				/>
				<Button onClick={handleAddAmount}>Add Amount</Button>
				<Button
					onClick={() => {
						void handleAddAsync();
					}}
				>
					Add Async
				</Button>
				<Button onClick={handleAddIfOdd}>Add If Odd</Button>
			</div>
		</div>
	);
}
