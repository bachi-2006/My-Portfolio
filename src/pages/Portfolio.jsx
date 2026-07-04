import React, { useState } from "react";
import { Projects } from "../assets/Projects";

export default function Portfolio({ sheetHandler }) {
	const [isSelected, setIsSelected] = useState("All");

	const categories = [
		"All",
		"Web Development",
		"App Development",
		"AI & Machine Learning",
		"IoT & Embedded Systems",
		"Data Analytics",
		"Python Tools",
	];

	const filterProjects =
		isSelected === "All"
			? Projects
			: Projects.filter((project) => project.categories.includes(isSelected));

	return (
		<article className="portfolio active" data-page="portfolio">
			<header>
				<h2 className="h2 article-title spacegrotesk">Portfolio</h2>
			</header>

			<section className="projects">
				{/* Desktop Filter */}
				<ul className="filter-list">
					{categories.map((cat) => (
						<li className="filter-item" key={cat}>
							<button
								className={isSelected === cat ? "active" : ""}
								onClick={() => setIsSelected(cat)}
							>
								{cat}
							</button>
						</li>
					))}
				</ul>

				{/* Mobile Filter */}
				<div className="filter-select-box md:hidden">
					<select
						className="w-full bg-[var(--eerie-black-2)] text-[var(--light-gray)] p-3 border border-[var(--jet)] rounded-xl text-sm"
						value={isSelected}
						onChange={(e) => setIsSelected(e.target.value)}
					>
						{categories.map((cat) => (
							<option value={cat} key={cat}>{cat}</option>
						))}
					</select>
				</div>

				{/* Project Grid */}
				<div className="grid md:grid-cols-2 grid-cols-1 gap-6 cursor-pointer">
					{filterProjects.map((project, index) => (
						<div
							key={index}
							onClick={() => sheetHandler(project)}
							className="bg-[#2b2b2c6a] hover:bg-[linear-gradient(0deg,_rgba(254,202,102,0.12)_0%,_transparent_100%)] bg-[linear-gradient(0deg,_rgba(254,202,102,0.03)_0%,_transparent_100%)] p-6 rounded-2xl text-white h-[380px] flex flex-col justify-between border-[#363636] border group transition-all duration-300 hover:border-[#585858] hover:shadow-lg hover:shadow-yellow-500/[0.02]"
						>
							<div className="space-y-2">
								<span className="spacegrotesk text-lg font-bold block group-hover:text-yellow-400 transition-colors duration-200">
									{project.title}
								</span>
								<span className="text-[#ffffffb3] font-thin line-clamp-2 text-sm block">
									{project.description}
								</span>
							</div>

							<div className="relative w-full h-[210px] mt-4 overflow-hidden rounded-xl bg-[#1b1b1c3a] border border-gray-800/40 flex items-end justify-center">
								{project.img && project.img.length >= 2 ? (
									<>
										<img
											src={project.img[0]}
											alt={project.title}
											className="absolute bottom-[-20px] h-[170px] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.6)] left-6 group-hover:rotate-[-3deg] transition-transform group-hover:scale-[1.05] group-hover:translate-x-[-5px] w-[58%] object-cover bg-top"
										/>
										<img
											src={project.img[1]}
											alt={project.title}
											className="absolute bottom-[-20px] h-[130px] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.6)] right-6 group-hover:rotate-[3deg] transition-transform group-hover:scale-[1.05] group-hover:translate-x-[5px] w-[42%] object-cover bg-top"
										/>
									</>
								) : project.img && project.img.length === 1 ? (
									<img
										src={project.img[0]}
										alt={project.title}
										className="absolute bottom-[-20px] h-[160px] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.6)] left-1/2 -translate-x-1/2 w-[85%] object-cover bg-top transition-all duration-300 group-hover:scale-[1.03] group-hover:bottom-[-10px]"
									/>
								) : (
									<div className="w-full h-full flex items-center justify-center p-6 flex-wrap gap-2">
										{project.tools?.slice(0, 8).map((tool, i) => (
											<span
												key={i}
												className="text-xs px-2.5 py-1 bg-[#ffffff05] rounded-full text-yellow-200/70 border border-yellow-400/10"
											>
												{tool}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{filterProjects.length === 0 && (
					<div className="text-center text-gray-500 py-16">
						<ion-icon name="folder-open-outline" style={{ fontSize: "48px" }}></ion-icon>
						<p className="mt-4 text-lg">No projects in this category yet.</p>
					</div>
				)}
			</section>
		</article>
	);
}
