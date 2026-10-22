import React from "react";

const wins = [
	{ place: "1st", event: "Sowparnika-2K24", note: "IR smart home prototype" },
	{ place: "1st", event: "Frame 2 Reality", note: "FPV Unity game" },
	{ place: "Built", event: "Workato Hackathon", note: "Incident Radar" },
	{ place: "Built", event: "IndiaCodex 2026", note: "EscrowAI on Cardano" },
	{ place: "Built", event: "Smart India Hackathon", note: "RailWay AI Control" },
];

export default function Library() {
	return (
		<div className="hquotes homebox overflow-hidden p-6 sm:p-8 flex flex-col">
			<p className="cristik text-white text-4xl">
				Wins
				<span className="block opacity-60 text-xl">& hackathons</span>
			</p>
			<ul className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
				{wins.map((w) => (
					<li key={w.event} className="flex items-baseline gap-3">
						<span
							className={`w-11 shrink-0 font-semibold ${
								w.place === "1st" ? "text-yellow-300" : "text-gray-500"
							}`}
						>
							{w.place}
						</span>
						<span className="text-white">
							{w.event}
							<span className="text-gray-400"> · {w.note}</span>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
