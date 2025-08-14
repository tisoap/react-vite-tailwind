import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { NumberInput } from "@/components/NumberInput";
import { PageTitle } from "@/components/PageTitle";
import { UIButton } from "@/components/UIButton";

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
				<UIButton aria-label="Decrement" onClick={handleDecrement} square>
					−
				</UIButton>
				<div className="text-6xl font-semibold tabular-nums">{count}</div>
				<UIButton aria-label="Increment" onClick={handleIncrement} square>
					+
				</UIButton>
			</div>

			<div className="flex items-center justify-center gap-3">
				<NumberInput
					aria-label="Amount"
					onChange={(event) => {
						setAmount(Number(event.target.value));
					}}
					value={amount}
				/>
				<UIButton onClick={handleAddAmount}>Add Amount</UIButton>
				<UIButton
					onClick={() => {
						void handleAddAsync();
					}}
				>
					Add Async
				</UIButton>
				<UIButton onClick={handleAddIfOdd}>Add If Odd</UIButton>
			</div>
		</div>
	);
}
