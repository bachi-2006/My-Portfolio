import { useState, useEffect } from "react";
import React from "react";

import "./App.css";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import PortfolioSheet from "./components/PortfolioSheet";
import Experiments from "./pages/Experiments";
import Footer from "./components/Footer";
import { LogoLoop } from "./components/LogoLoop";

const loaderLogos = [
	{ src: "/html5.svg", alt: "HTML5" },
	{ src: "/css.svg", alt: "CSS" },
	{ src: "/tailwindcss.svg", alt: "Tailwind CSS" },
	{ src: "/nextjs_icon_dark.svg", alt: "Next.js" },
	{ src: "/mongodb.svg", alt: "MongoDB" },
	{ src: "/docker.svg", alt: "Docker" },
	{ src: "/aws.svg", alt: "AWS" },
	{ src: "/github.svg", alt: "GitHub" },
	{ src: "/figma.svg", alt: "Figma" },
	{ src: "/redis.svg", alt: "Redis" },
];

function AppContent() {
	const location = useLocation();
	const isHome = location.pathname === "/";

	useEffect(() => {
		const pageTitles = {
			"/": "Rohith Dachepally | Portfolio",
			"/about": "About | Rohith Dachepally",
			"/portfolio": "Portfolio | Rohith Dachepally",
			"/contact": "Contact | Rohith Dachepally",
			"/experiments": "Experiments | Rohith Dachepally",
		};
		document.title = pageTitles[location.pathname] || "Rohith Dachepally";
	}, [location]);

	const [sheetOpen, setSheetOpen] = useState(false);
	const [sheetData, setSheetData] = useState({});
	const [loading, setLoading] = useState(() => {
		if (typeof window === "undefined") return false;
		const params = new URLSearchParams(window.location.search);
		if (params.get("skipLoader") === "true") return false;
		if (sessionStorage.getItem("portfolio_loader_seen") === "1") return false;
		return window.location.pathname === "/";
	});
	const [fadeLoader, setFadeLoader] = useState(false);

	const sheetHandler = (data = {}) => {
		setSheetOpen(true);
		setSheetData(data);
	};

	useEffect(() => {
		if (!loading) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";

		sessionStorage.setItem("portfolio_loader_seen", "1");

		const fadeTimer = setTimeout(() => {
			setFadeLoader(true);
		}, 900);
		const removeTimer = setTimeout(() => {
			setLoading(false);
			document.body.style.overflow = "";
		}, 1400);

		return () => {
			clearTimeout(fadeTimer);
			clearTimeout(removeTimer);
			document.body.style.overflow = "";
		};
	}, [loading]);

	return (
		<>
			{loading && (
				<div
					className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[hsl(0,0%,7%)] text-white transition-opacity duration-700 ease-in-out ${
						fadeLoader ? "opacity-0 pointer-events-none" : "opacity-100"
					}`}
				>
					<div className="text-center mb-12 max-w-lg px-6 select-none">
						<h1 className="text-4xl md:text-6xl font-bold tracking-wider text-[#feca66] mb-3 spacegrotesk uppercase animate-pulse">
							Rohith Dachepally
						</h1>
						<p className="text-[#a1a1aa] text-xs md:text-sm uppercase tracking-[0.25em] font-light">
							Creative Portfolio & Tech Workspace
						</p>
					</div>
					<div className="w-full max-w-4xl px-4">
						<LogoLoop logos={loaderLogos} speed={60} logoHeight={45} gap={48} />
					</div>
				</div>
			)}
			<PortfolioSheet
				sheetOpen={sheetOpen}
				setSheetOpen={setSheetOpen}
				sheetData={sheetData}
			/>
			<Navbar />
			<main
				className={`transition-transform ${sheetOpen ? "scale-[0.90]" : ""} ${isHome ? "" : "no-sidebar"}`}
			>
				{isHome ? <SideNav /> : null}
				<div className={`main-content ${isHome ? "" : "main-content--full"}`}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/experiments" element={<Experiments />} />
						<Route
							path="/portfolio"
							element={<Portfolio sheetHandler={sheetHandler} />}
						/>
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
}

function App() {
	return <AppContent />;
}

export default App;
