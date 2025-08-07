import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen flex items-center justify-center min-w-[320px] bg-[#242424] text-white/87 font-sans leading-relaxed font-normal">
			<div className="max-w-[1280px] mx-auto p-8 text-center">
				<div className="flex justify-center items-center gap-8 mb-8">
					<a
						href="https://vite.dev"
						target="_blank"
						className="font-medium text-[#646cff] no-underline hover:text-[#535bf2] transition-colors"
					>
						<img
							src={viteLogo}
							className="h-24 w-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
							alt="Vite logo"
						/>
					</a>
					<a
						href="https://react.dev"
						target="_blank"
						className="font-medium text-[#646cff] no-underline hover:text-[#535bf2] transition-colors"
					>
						<img
							src={reactLogo}
							className="h-24 w-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin"
							style={{ animationDuration: "20s" }}
							alt="React logo"
						/>
					</a>
				</div>
				<h1 className="text-5xl font-bold leading-tight mb-8">Vite + React</h1>
				<div className="p-8">
					<button
						onClick={() => setCount((count) => count + 1)}
						className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium font-inherit bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff] focus:outline-none focus:ring-4 focus:ring-[#646cff]"
					>
						count is {count}
					</button>
					<p className="mt-4">
						Edit{" "}
						<code className="bg-[#1a1a1a] px-2 py-1 rounded text-sm">
							src/App.tsx
						</code>{" "}
						and save to test HMR
					</p>
				</div>
				<p className="text-gray-400">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</div>
	);
}

export default App;
