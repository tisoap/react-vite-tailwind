import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<h1 className="text-3xl font-bold text-slate-800">Index Page</h1>
		</div>
	);
}
