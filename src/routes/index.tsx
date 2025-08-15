import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code, Palette, Shield, Sparkles, Zap } from "lucide-react";

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
						<span className="text-primary bg-primary/10 rounded-full px-3 py-1 text-sm font-medium">
							Modern Template
						</span>
						<Sparkles className="text-primary h-6 w-6 animate-pulse" />
					</div>
					<PageTitle>Welcome to Your Template</PageTitle>
					<p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
						A modern, beautiful starting point for your next React project.
						Built with Vite, Tailwind CSS, and ShadCN UI components.
					</p>
					<div className="flex items-center justify-center gap-4 pt-4">
						<Button asChild className="group" size="lg">
							<Link to="/counter">
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
						<Button size="lg" variant="outline">
							View Source
						</Button>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="space-y-8">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold">Why Choose This Template?</h2>
					<p className="text-muted-foreground mx-auto max-w-2xl">
						Everything you need to build modern, scalable web applications
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Zap className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Lightning Fast</h3>
						<p className="text-muted-foreground text-sm">
							Built with Vite for instant hot reload and blazing fast builds.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Palette className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Beautiful UI</h3>
						<p className="text-muted-foreground text-sm">
							Modern design system with Tailwind CSS and ShadCN components.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Code className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Type Safe</h3>
						<p className="text-muted-foreground text-sm">
							Full TypeScript support with strict type checking.
						</p>
					</div>

					<div className="group border-border/50 bg-card/50 hover:bg-card/80 hover:shadow-primary/5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
							<Shield className="text-primary h-6 w-6" />
						</div>
						<h3 className="mb-2 text-lg font-semibold">Production Ready</h3>
						<p className="text-muted-foreground text-sm">
							Optimized builds and modern tooling for production deployment.
						</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="border-border/50 from-primary/5 via-primary/10 to-primary/5 relative space-y-6 overflow-hidden rounded-2xl border bg-gradient-to-r p-8 text-center">
				<div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-50" />
				<div className="relative z-10 space-y-6">
					<h2 className="text-2xl font-bold">
						Ready to Build Something Amazing?
					</h2>
					<p className="text-muted-foreground mx-auto max-w-2xl">
						This template provides everything you need to get started. Customize
						it, extend it, and make it your own.
					</p>
					<Button asChild className="group" size="lg">
						<Link to="/counter">
							Explore Components
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}
