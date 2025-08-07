import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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
			<h1 className="text-3xl font-bold mb-10">Counter</h1>

			<div className="flex items-center justify-center gap-8 mb-8">
				<button
					className="h-9 w-9 grid place-items-center rounded-md bg-slate-100 border border-slate-200 hover:bg-slate-200"
					onClick={handleDecrement}
					aria-label="Decrement"
				>
					−
				</button>
				<div className="text-6xl font-semibold tabular-nums">{count}</div>
				<button
					className="h-9 w-9 grid place-items-center rounded-md bg-slate-100 border border-slate-200 hover:bg-slate-200"
					onClick={handleIncrement}
					aria-label="Increment"
				>
					+
				</button>
			</div>

			<div className="flex items-center justify-center gap-3">
				<input
					className="w-12 text-center border border-slate-200 rounded-md py-2 bg-white"
					type="number"
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
					inputMode="numeric"
					aria-label="Amount"
				/>
				<button
					className="px-3 py-2 rounded-md bg-slate-100 border border-slate-200 hover:bg-slate-200"
					onClick={handleAddAmount}
				>
					Add Amount
				</button>
				<button
					className="px-3 py-2 rounded-md bg-slate-100 border border-slate-200 hover:bg-slate-200"
					onClick={handleAddAsync}
				>
					Add Async
				</button>
				<button
					className="px-3 py-2 rounded-md bg-slate-100 border border-slate-200 hover:bg-slate-200"
					onClick={handleAddIfOdd}
				>
					Add If Odd
				</button>
			</div>
		</div>
	);
}
