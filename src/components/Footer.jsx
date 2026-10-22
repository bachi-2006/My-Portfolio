import React from "react";
import { Link } from "react-router-dom";
import { site } from "../config/site";

const socials = [
	{ icon: "logo-github", href: site.github, label: "GitHub" },
	{ icon: "logo-linkedin", href: site.linkedin, label: "LinkedIn" },
	{ icon: "logo-instagram", href: site.instagram, label: "Instagram" },
	{ icon: "link-outline", href: site.linktree, label: "Linktree" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-brand">
					<span className="footer-name cristik">{site.name}</span>
					<span className="footer-tagline">AI/ML · Full-Stack · VBIT '27</span>
				</div>

				<nav className="footer-links" aria-label="Footer navigation">
					<Link to="/" className="footer-link">Home</Link>
					<span className="footer-sep">·</span>
					<Link to="/about" className="footer-link">About</Link>
					<span className="footer-sep">·</span>
					<Link to="/portfolio" className="footer-link">Portfolio</Link>
					<span className="footer-sep">·</span>
					<Link to="/contact" className="footer-link">Contact</Link>
					<span className="footer-sep">·</span>
					<Link to="/experiments" className="footer-link">Experiments</Link>
				</nav>

				<div className="footer-socials">
					{socials.map((s) => (
						<a
							key={s.label}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							className="footer-social-link"
							aria-label={s.label}
							title={s.label}
						>
							<ion-icon name={s.icon}></ion-icon>
						</a>
					))}
				</div>
			</div>

			<div className="footer-bottom">
				<span>© {year} {site.name}. All rights reserved.</span>
				<span className="footer-made">Made with ♥ in Hyderabad</span>
			</div>
		</footer>
	);
}
