import { PageTitle } from "@components/PageTitle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<PageTitle>Index Page</PageTitle>
		</div>
	);
}
