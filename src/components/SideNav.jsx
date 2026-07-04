import React, { useState } from "react";
import ScrambleText from "./ScrambleText";

export default function SideNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<aside className={`sidebar ${isOpen ? "active" : ""}`} data-sidebar>
			<div className="sidebar-info">
				<figure className="avatar-box">
					<img
						src="/avatar/profile.jpg"
						className="rounded-full object-cover"
						alt="Rohith Dachepally"
						width="80"
						height="80"
					/>
				</figure>

				<div className="info-content">
					<ScrambleText className="cristik name" title="Rohith Dachepally">
						Rohith Dachepally
					</ScrambleText>
					<div className="flex gap-2 flex-wrap">
						<p className="title sidebar-title-wrap">Tech Enthusiast | Data Analytics | CS Undergrad @ VBIT</p>
					</div>
				</div>

				<button className="info_more-btn" onClick={() => setIsOpen(!isOpen)} data-sidebar-btn>
					<span>{isOpen ? "Hide Contacts" : "Show Contacts"}</span>
					<ion-icon name={isOpen ? "chevron-up" : "chevron-down"}></ion-icon>
				</button>
			</div>

			<div className="sidebar-info_more">
				<div className="separator"></div>

				<ul className="contacts-list">
					<li className="contact-item">
						<div className="icon-box">
							<ion-icon name="mail-outline"></ion-icon>
						</div>

						<div className="contact-info">
							<p className="contact-title">Email</p>

							<a href="mailto:dachepallyrohith@gmail.com" className="contact-link">
								dachepallyrohith@gmail.com
							</a>
						</div>
					</li>

					<li className="contact-item">
						<div className="icon-box">
							<ion-icon name="flash-outline"></ion-icon>
						</div>

						<div className="contact-info">
							<p className="contact-title">Availability</p>
							<span className="availability-badge">
								<span className="availability-dot"></span>
								Open to Work
							</span>
						</div>
					</li>

					<li className="contact-item">
						<div className="icon-box">
							<ion-icon name="location-outline"></ion-icon>
						</div>

						<div className="contact-info">
							<p className="contact-title">Location</p>

							<address>Hyderabad, Telangana, India</address>
						</div>
					</li>
				</ul>

				<div className="separator"></div>

				<ul className="social-list">
					<li className="social-item">
						<a href="https://www.linkedin.com/in/rohith-dachepally" className="social-link">
							<ion-icon name="logo-linkedin"></ion-icon>
						</a>
					</li>

					<li className="social-item">
						<a href="https://github.com/bachi-2006" className="social-link">
							<ion-icon name="logo-github"></ion-icon>
						</a>
					</li>

					<li className="social-item">
						<a href="https://www.instagram.com/_mr_decent_06" className="social-link">
							<ion-icon name="logo-instagram"></ion-icon>
						</a>
					</li>

					<li className="social-item">
						<a href="https://www.facebook.com/dachepally.rohith.9" className="social-link">
							<ion-icon name="logo-facebook"></ion-icon>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
}
