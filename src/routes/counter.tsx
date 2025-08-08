import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageTitle } from "@components/PageTitle";
import { UIButton } from "@components/UIButton";
import { NumberInput } from "@components/NumberInput";

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
		<div className="w-full max-w-xl mx-auto text-center">
			<PageTitle>Counter</PageTitle>
			<div className="h-4" />

			<div className="flex items-center justify-center gap-8 mb-8">
				<UIButton square onClick={handleDecrement} aria-label="Decrement">
					−
				</UIButton>
				<div className="text-6xl font-semibold tabular-nums">{count}</div>
				<UIButton square onClick={handleIncrement} aria-label="Increment">
					+
				</UIButton>
			</div>

			<div className="flex items-center justify-center gap-3">
				<NumberInput
					value={amount}
					onChange={(event) => {
						setAmount(Number(event.target.value));
					}}
					aria-label="Amount"
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
