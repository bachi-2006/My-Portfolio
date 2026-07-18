import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
	{
		path: "/",
		label: "Home",
		icon: "bug-outline",
	},
	{
		path: "/about",
		label: "About",
		icon: "person-circle-outline",
	},
	{
		path: "/portfolio",
		label: "Portfolio",
		icon: "grid-outline",
	},
	{
		path: "/contact",
		label: "Contact",
		icon: "mail-outline",
	},
	{
		path: "/experiments",
		label: "Experiments",
		icon: "flask-outline",
	},
];

const linkClassName = (isActive) =>
	`${isActive ? "text-gray-200" : "text-gray-400"} hover:text-gray-300 transition-colors duration-300`;

const Navbar = () => {
	const [show, setShow] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const lastScrollYRef = useRef(0);
	const tickingRef = useRef(false);

	useEffect(() => {
		if (typeof window === "undefined") return undefined;

		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

			setShow(currentScrollY <= lastScrollYRef.current || currentScrollY < 24);
			lastScrollYRef.current = currentScrollY;
			tickingRef.current = false;
		};

		const handleScroll = () => {
			if (tickingRef.current) return;

			tickingRef.current = true;
			window.requestAnimationFrame(controlNavbar);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!isMobileMenuOpen || typeof document === "undefined") return undefined;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<nav
				className={`fixed bottom-[30px] left-0 z-[10] w-full min-h-[62px] px-4 transition-transform duration-300 md:h-[62px] lg:h-[62px] ${
					show ? "translate-y-0" : "translate-y-[calc(100%+30px)]"
				}`}
			>
				<div className="navblur mx-auto w-full max-w-[800px] transition-all duration-200">
					<div
						className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
							isMobileMenuOpen ? "max-h-screen" : "max-h-0"
						}`}
					>
						<div className="flex flex-col gap-6 p-8 text-right text-2xl">
							{navItems.map((item) => (
								<NavLink
									key={item.path}
									to={item.path}
									className={({ isActive }) => linkClassName(isActive)}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<div className="flex items-center justify-end gap-2">
										<ion-icon name={item.icon}></ion-icon>
										{item.label}
									</div>
								</NavLink>
							))}
						</div>
					</div>
					<div className="flex h-[60px] items-center justify-between overflow-hidden rounded-2xl px-6 text-white">
						<img src="/rohith-logo.png" className="h-[80%]" alt="Rohith logo" />

						<div className="relative hidden h-full items-center space-x-4 md:flex">
							{navItems.map((item) => (
								<NavLink key={item.path} to={item.path}>
									{({ isActive }) => (
										<div
											className={`${linkClassName(
												isActive
											)} relative flex h-full items-center`}
										>
											<div className="flex items-center gap-2">
												<ion-icon name={item.icon}></ion-icon>
												{item.label}
											</div>
											{isActive && (
												<div className="absolute bottom-0 left-0 h-0.5 w-full bg-yellow-500" />
											)}
										</div>
									)}
								</NavLink>
							))}
						</div>

						<div className="flex items-center md:hidden">
							<button
								type="button"
								aria-expanded={isMobileMenuOpen}
								aria-label="Toggle navigation menu"
								onClick={() => setIsMobileMenuOpen((open) => !open)}
							>
								<svg
									className="h-6 w-6 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="hidden gap-2 text-2xl text-gray-400 lg:flex">
					<a
						className="transition-colors hover:text-gray-200"
						href="https://github.com/bachi-2006"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<ion-icon name="logo-github"></ion-icon>
					</a>
					<a
						className="transition-colors hover:text-gray-200"
						href="https://www.linkedin.com/in/rohith-dachepally/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<ion-icon name="logo-linkedin"></ion-icon>
					</a>
				</div>
			</nav>
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 z-[5] bg-black bg-opacity-50 transition-[background-color] duration-700"
					onClick={() => setIsMobileMenuOpen(false)}
				></div>
			)}
		</>
	);
};

export default Navbar;
