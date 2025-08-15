import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BookOpen,
	Bug,
	Code,
	Globe,
	Palette,
	Rocket,
	Settings,
	Shield,
	Sparkles,
	TestTube,
	Zap,
} from "lucide-react";

import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/UI/Button";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="w-full space-y-20">
			{/* Hero Section */}
			<section className="space-y-8 text-center">
				<div className="space-y-6">
					<div className="mb-4 flex items-center justify-center gap-2">
						<Sparkles className="text-primary h-6 w-6 animate-pulse" />
						<span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
							React Vite Tailwind
						</span>
						<Sparkles className="text-primary h-6 w-6 animate-pulse" />
					</div>
					<PageTitle>Welcome to Your Template</PageTitle>
					<p className="muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
						A modern, batteries-included starting point for your next React
						project. Built with cutting-edge technologies and best practices.
					</p>
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="space-y-8">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold">Built with Modern Technologies</h2>
					<p className="muted-foreground mx-auto max-w-2xl">
						Leverage the latest and greatest tools in the React ecosystem
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Zap className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">React 19 + Vite 7</h3>
						<p className="text-muted-foreground text-sm">
							Lightning-fast development with instant HMR and blazing fast
							builds.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Code className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">TypeScript</h3>
						<p className="text-muted-foreground text-sm">
							Full type safety with strict settings and project references.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Palette className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Tailwind CSS v4</h3>
						<p className="text-muted-foreground text-sm">
							Modern utility-first CSS framework with official Vite plugin.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Globe className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">TanStack Router</h3>
						<p className="text-muted-foreground text-sm">
							Type-safe routing with code splitting and devtools included.
						</p>
					</div>
				</div>
			</section>

			{/* Development Tools Section */}
			<section className="space-y-8">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold">Developer Experience</h2>
					<p className="muted-foreground mx-auto max-w-2xl">
						Everything you need for a professional development workflow
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<BookOpen className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Storybook 9</h3>
						<p className="text-muted-foreground text-sm">
							Component development with Docs, A11y, and Vitest addons.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<TestTube className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Vitest + Playwright</h3>
						<p className="text-muted-foreground text-sm">
							Fast unit testing with browser-based Storybook tests.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Bug className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">ESLint + Prettier</h3>
						<p className="text-muted-foreground text-sm">
							Code quality with TypeScript, React, and accessibility rules.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="space-y-8">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold">Production Ready Features</h2>
					<p className="muted-foreground mx-auto max-w-2xl">
						Built for scale with modern best practices
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Rocket className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Optimized Builds</h3>
						<p className="text-muted-foreground text-sm">
							Production-ready bundles with code splitting and optimization.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Shield className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Type Safety</h3>
						<p className="text-muted-foreground text-sm">
							Full TypeScript coverage with strict settings and project
							references.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Settings className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Zero Config</h3>
						<p className="text-muted-foreground text-sm">
							Works out of the box with sensible defaults and best practices.
						</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="border-border/50 from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden rounded-2xl border bg-gradient-to-r p-8 text-center">
				<div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-50" />
				<div className="relative z-10 space-y-6">
					<h2 className="text-2xl font-bold">
						Ready to Build Something Amazing?
					</h2>
					<p className="muted-foreground mx-auto max-w-2xl">
						This template provides everything you need to get started. Customize
						it, extend it, and make it your own.
					</p>
					<Button asChild className="group" size="lg">
						<Link to="/counter">
							See Example
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}
