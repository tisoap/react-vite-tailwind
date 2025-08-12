import { PageTitle } from "@components/PageTitle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<PageTitle>Index Page</PageTitle>
		</div>
	);
}
