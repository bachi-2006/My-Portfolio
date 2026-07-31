import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ReactTerminal } from "react-terminal";

const revealUp = {
	initial: { opacity: 0, y: 24 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.16 },
	transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
	initial: { opacity: 0, y: 18 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.05,
		},
	},
	viewport: { once: true, amount: 0.15 },
};

export default function Contact() {
	const [isCliMode, setIsCliMode] = useState(false);
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [mapLoaded, setMapLoaded] = useState(false);
	const [mapFailed, setMapFailed] = useState(false);
	const terminalRef = useRef(null);

	const charLimit = 500;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (fullname && email && message) {
			submitForm(fullname, email, message);
		}
	};

	const submitForm = () => {
		setSubmitted(true);
		setFullname("");
		setEmail("");
		setMessage("");
		setTimeout(() => {
			setSubmitted(false);
		}, 6000);
	};

	const parseArgs = (args) => {
		const params = { name: "", email: "", message: "" };
		const nameIdx = args.findIndex((x) => x === "--name" || x === "-n");
		const emailIdx = args.findIndex((x) => x === "--email" || x === "-e");
		const msgIdx = args.findIndex((x) => x === "--message" || x === "-m");

		const getVal = (idx) => {
			if (idx === -1 || idx + 1 >= args.length) return "";
			const words = [];
			for (let i = idx + 1; i < args.length; i += 1) {
				if (args[i].startsWith("-")) break;
				words.push(args[i]);
			}
			return words.join(" ").replace(/^["']|["']$/g, "");
		};

		params.name = getVal(nameIdx);
		params.email = getVal(emailIdx);
		params.message = getVal(msgIdx);
		return params;
	};

	const commands = {
		help: () => (
			<div className="space-y-1.5 font-mono text-xs">
				<p className="font-semibold text-yellow-400">Available Commands:</p>
				<p>
					<span className="font-bold text-[#38bdf8]">contact</span> - Submit a
					message to Rohith
				</p>
				<p className="pl-4 text-gray-500">
					Usage: contact --name "Your Name" --email "your@email.com" --message
					"Your message"
				</p>
				<p className="pl-4 text-gray-500">
					Shorthand: contact -n "Your Name" -e "your@email.com" -m "Your message"
				</p>
				<p>
					<span className="font-bold text-[#38bdf8]">socials</span> - View social
					links and profiles
				</p>
				<p>
					<span className="font-bold text-[#38bdf8]">about</span> - Display a
					short resume card
				</p>
				<p>
					<span className="font-bold text-[#38bdf8]">gui</span> - Switch back to
					the visual form interface
				</p>
				<p>
					<span className="font-bold text-[#38bdf8]">clear</span> - Clear terminal
					logs
				</p>
			</div>
		),
		contact: (args) => {
			const { name, email: emailVal, message: messageVal } = parseArgs(args);
			if (!name || !emailVal || !messageVal) {
				return (
					<div className="space-y-1 font-mono text-xs text-red-400">
						<p>Error: Missing required fields.</p>
						<p>Syntax: contact --name "Name" --email "Email" --message "Message"</p>
						<p>Or try: contact -n "Name" -e "Email" -m "Message"</p>
					</div>
				);
			}
			submitForm(name, emailVal, messageVal);
			return (
				<div className="space-y-1 font-mono text-xs text-green-400">
					<p>[ok] Message processing success!</p>
					<p>
						Name: <span className="text-white">{name}</span>
					</p>
					<p>
						Email: <span className="text-white">{emailVal}</span>
					</p>
					<p>
						Message: <span className="text-white">{messageVal}</span>
					</p>
					<p className="text-yellow-400">Submitting contact form state...</p>
				</div>
			);
		},
		socials: () => (
			<div className="space-y-1 font-mono text-xs">
				<p>
					[link] <span className="font-semibold">LinkedIn:</span>{" "}
					<a
						href="https://www.linkedin.com/in/rohith-dachepally"
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 hover:underline"
					>
						rohith-dachepally
					</a>
				</p>
				<p>
					[link] <span className="font-semibold">GitHub:</span>{" "}
					<a
						href="https://github.com/bachi-2006"
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 hover:underline"
					>
						bachi-2006
					</a>
				</p>
				<p>
					[link] <span className="font-semibold">Instagram:</span>{" "}
					<a
						href="https://www.instagram.com/_mr_decent_06"
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 hover:underline"
					>
						_mr_decent_06
					</a>
				</p>
				<p>
					[link] <span className="font-semibold">Linktree:</span>{" "}
					<a
						href="https://linktr.ee/rohith_dachepally"
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 hover:underline"
					>
						rohith_dachepally
					</a>
				</p>
			</div>
		),
		about: () => (
			<div className="space-y-1.5 font-mono text-xs text-gray-300">
				<p className="text-sm font-bold text-yellow-400">Rohith Dachepally</p>
				<p className="text-xs text-gray-500">
					CS Undergrad @ VBIT | Data Analytics & IoT Enthusiast
				</p>
				<p className="mt-1">
					Built award winning IR designs, computer vision OS automators,
				</p>
				<p>and real-time peripheral keyboard visualizers.</p>
			</div>
		),
		gui: () => {
			setTimeout(() => setIsCliMode(false), 500);
			return "Restoring visual form layout...";
		},
		clear: () => "Terminal logs cleared.",
	};

	useEffect(() => {
		if (isCliMode && terminalRef.current) {
			terminalRef.current.focusTerminal();
		}
	}, [isCliMode]);

	useEffect(() => {
		if (mapLoaded) return undefined;

		const fallbackTimer = setTimeout(() => {
			setMapFailed(true);
		}, 3500);

		return () => clearTimeout(fallbackTimer);
	}, [mapLoaded]);

	return (
		<article className="contact active" data-page="contact">
			<motion.header
				className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
				{...revealUp}
			>
				<h2 className="h2 article-title mb-0">Contact</h2>

				<div className="flex gap-1 rounded-xl border border-gray-800 bg-[#202022] p-1 shadow-inner">
					<button
						onClick={() => setIsCliMode(false)}
						className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
							!isCliMode
								? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-md"
								: "text-gray-400 hover:text-white"
						}`}
					>
						<ion-icon name="create-outline"></ion-icon>
						<span>GUI Form</span>
					</button>
					<button
						onClick={() => setIsCliMode(true)}
						className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
							isCliMode
								? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-md"
								: "text-gray-400 hover:text-white"
						}`}
					>
						<ion-icon name="terminal-outline"></ion-icon>
						<span>Developer CLI</span>
					</button>
				</div>
			</motion.header>

			{isCliMode ? (
				<motion.div
					className="relative h-[450px] overflow-hidden rounded-2xl border border-gray-800 bg-[#1e1e1f] shadow-2xl"
					{...revealUp}
				>
					<div className="absolute left-4 top-3 z-10 flex gap-1.5">
						<span className="h-3 w-3 rounded-full bg-[#ff5f56]"></span>
						<span className="h-3 w-3 rounded-full bg-[#ffbd2e]"></span>
						<span className="h-3 w-3 rounded-full bg-[#27c93f]"></span>
						<span className="ml-4 select-none font-mono text-[10px] text-gray-500">
							rohith@workspace:~/contact
						</span>
					</div>
					<div className="h-full w-full pb-2 pt-8">
						<ReactTerminal
							ref={terminalRef}
							commands={commands}
							prompt="visitor@rohith-pc:~$ "
							theme="my-custom-theme"
							welcomeMessage="React CLI Console. Type 'help' to see active commands."
							errorMessage="Command unrecognized. Type 'help' for instructions."
							themes={{
								"my-custom-theme": {
									themeBGColor: "#1e1e1f",
									themeToolbarColor: "#1e1e1f",
									themeColor: "#ffffff",
									themePromptColor: "#ffdb70",
								},
							}}
						/>
					</div>
				</motion.div>
			) : (
				<>
					<motion.div className="contact-quick-bar" {...staggerContainer}>
						<a href="mailto:dachepallyrohith@gmail.com" className="contact-quick-item">
							<ion-icon name="mail-outline"></ion-icon>
							<span>dachepallyrohith@gmail.com</span>
						</a>
						<a
							href="https://www.linkedin.com/in/rohith-dachepally"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-quick-item"
						>
							<ion-icon name="logo-linkedin"></ion-icon>
							<span>LinkedIn</span>
						</a>
						<a
							href="https://github.com/bachi-2006"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-quick-item"
						>
							<ion-icon name="logo-github"></ion-icon>
							<span>GitHub</span>
						</a>
						<a
							href="https://linktr.ee/rohith_dachepally"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-quick-item"
						>
							<ion-icon name="link-outline"></ion-icon>
							<span>Linktree</span>
						</a>
					</motion.div>

					<motion.section
						className="mapbox group relative contact-map-shell"
						data-mapbox
						{...revealUp}
					>
						{!mapLoaded && (
							<div className="mapbox-fallback">
								<div className="mapbox-fallback__badge">
									<ion-icon name="location-outline"></ion-icon>
									<span>{mapFailed ? "Map preview unavailable" : "Loading map preview"}</span>
								</div>
								<div className="mapbox-fallback__content">
									<h4>Hyderabad, Telangana</h4>
									<p>
										{mapFailed
											? "The embedded map is blocked in this browser, but the location link still works."
											: "Preparing the embedded map view."}
									</p>
								</div>
							</div>
						)}
						<figure className="h-full w-full">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3170294889!2d78.24323212262038!3d17.41229792508498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1721065588811!5m2!1sen!2sin"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Hyderabad, Telangana map"
								onLoad={() => {
									setMapLoaded(true);
									setMapFailed(false);
								}}
								onError={() => {
									setMapLoaded(false);
									setMapFailed(true);
								}}
								className={mapLoaded ? "opacity-100" : "opacity-0"}
							></iframe>
						</figure>
						<a
							href="https://maps.google.com/maps?q=Hyderabad,%20Telangana"
							target="_blank"
							rel="noopener noreferrer"
							className="absolute right-4 top-4 flex items-center gap-1.5 rounded-xl border border-gray-800 bg-[#1b1b1cde] px-3 py-1.5 font-mono text-[10px] font-semibold text-yellow-400 shadow-lg transition-all duration-200 hover:border-yellow-500 hover:bg-yellow-400 hover:text-black sm:text-xs"
						>
							<span>Open in Maps</span>
							<ion-icon name="open-outline" style={{ fontSize: "12px" }}></ion-icon>
						</a>
					</motion.section>

					<motion.section className="contact-form contact-form-shell" {...revealUp}>
						<h3 className="h3 form-title">Contact Form</h3>

						{submitted ? (
							<div className="flex flex-col items-center gap-3 rounded-2xl border border-green-500/30 bg-[#212123] p-8 text-center text-green-400 shadow-lg transition-all duration-300">
								<div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-500/10 text-3xl text-green-500 animate-bounce">
									<ion-icon name="checkmark-circle-outline"></ion-icon>
								</div>
								<h4 className="spacegrotesk text-lg font-semibold text-white">
									Message Sent Successfully!
								</h4>
								<p className="text-sm font-light text-gray-400">
									Thank you for reaching out! Rohith will get back to you shortly.
								</p>
							</div>
						) : (
							<motion.form onSubmit={handleSubmit} className="form" {...staggerContainer}>
								<div className="input-wrapper">
									<div className="relative">
										<input
											type="text"
											name="fullname"
											className="form-input w-full rounded-xl border-gray-800 bg-transparent focus:border-yellow-400"
											placeholder="Full name"
											required
											value={fullname}
											onChange={(e) => setFullname(e.target.value)}
										/>
									</div>

									<div className="relative">
										<input
											type="email"
											name="email"
											className="form-input w-full rounded-xl border-gray-800 bg-transparent focus:border-yellow-400"
											placeholder="Email address"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>

								<div className="relative mb-2">
									<textarea
										name="message"
										className="form-input h-[140px] w-full resize-none rounded-xl border-gray-800 bg-transparent focus:border-yellow-400"
										placeholder="Your Message"
										required
										maxLength={charLimit}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									/>
									<span className="absolute bottom-3 right-4 font-mono text-[10px] text-gray-500">
										{message.length} / {charLimit}
									</span>
								</div>

								<button
									className="form-btn cursor-pointer transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
									type="submit"
									disabled={!fullname || !email || !message}
								>
									<ion-icon name="paper-plane"></ion-icon>
									<span>Send Message</span>
								</button>
							</motion.form>
						)}
					</motion.section>
				</>
			)}
		</article>
	);
}
