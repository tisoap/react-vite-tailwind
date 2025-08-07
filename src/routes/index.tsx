import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@components/page-title";

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
