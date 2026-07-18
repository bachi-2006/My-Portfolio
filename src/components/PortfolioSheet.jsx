import React, { useEffect } from "react";
import "../App.css";
import FetchLinkData from "./FetchLinkData";
import ZoomImg from "./ZoomImg";

export default function PortfolioSheet({ sheetOpen, setSheetOpen, sheetData }) {
	useEffect(() => {
		if (!sheetOpen || typeof document === "undefined") return undefined;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setSheetOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [setSheetOpen, sheetOpen]);

	const getLinkAlt = (url) => {
		try {
			const host = new URL(url).hostname;
			if (host.includes("github.com")) return "GitHub Repository";
			if (host.includes("linkedin.com")) return "LinkedIn Post";
			return host.replace("www.", "");
		} catch {
			return "Project Link";
		}
	};

	return (
		<div
			className={`fixed left-0 top-0 z-[20] h-full w-full duration-300 ${
				sheetOpen ? "bg-[#0000007c]" : "pointer-events-none bg-transparent"
			}`}
		>
			<div className="h-full w-full cursor-pointer" onClick={() => setSheetOpen(false)}></div>
			<div
				role="dialog"
				aria-modal="true"
				aria-label={sheetData.title ? `${sheetData.title} project details` : "Project details"}
				className={`portfolioSheet absolute right-0 top-0 h-screen max-w-[800px] overflow-y-auto transition-[width] duration-300 ease-in ${
					sheetOpen ? "w-full" : "w-0"
				}`}
			>
				<header className="m-[30px]">
					<h2 className="mb-[20px] flex justify-between spacegrotesk h2 font-bold">
						{sheetData.title}
						<button
							type="button"
							className="modal-close-btn cursor-pointer transition-transform duration-200 hover:scale-[1.1]"
							onClick={() => setSheetOpen(false)}
							aria-label="Close project details"
						>
							<ion-icon className="cursor-pointer" name="close-outline"></ion-icon>
						</button>
					</h2>

					<section className="about-text">
						<p>{sheetData.description}</p>
					</section>
					<div className="flex flex-wrap gap-3">
						{sheetData?.tools?.map((item) => (
							<p key={item} className="technologiesTag">
								{item}
							</p>
						))}
					</div>
				</header>
				<section>
					<ul className="sheet-list has-scrollbar space-x-4">
						{sheetData.img?.map((item) => (
							<li key={item} className="sheet-item list-none">
								<ZoomImg src={item} className="sheet-item" alt={sheetData.title || "Project image"} />
							</li>
						))}
					</ul>
				</section>

				<div className="m-[30px] space-y-3">
					{sheetData?.links?.length > 0 && (
						<h1 className="text-lg font-semibold text-white">External Links</h1>
					)}
					{sheetData?.links?.map((item) => (
						<FetchLinkData key={item} alt={getLinkAlt(item)} url={item} />
					))}
				</div>
			</div>
		</div>
	);
}
