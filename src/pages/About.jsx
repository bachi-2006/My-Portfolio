import React from "react";
import { motion } from "framer-motion";

const experience = [
	{
		company: "IEI VBIT Student Chapter",
		companyLogo: "https://www.google.com/s2/favicons?domain=vbithyd.ac.in&sz=128",
		role: "Technical Co-Lead",
		duration: "May 2026 - Present",
		description:
			"Leading the technical team of the Institution of Engineers (India) student chapter at VBIT, running workshops, hackathon prep and technical events.",
	},
	{
		company: "EduSkills × Google for Developers (AICTE)",
		companyLogo: "https://www.google.com/s2/favicons?domain=eduskillsfoundation.org&sz=128",
		role: "Google AI-ML Virtual Intern",
		duration: "Jun 2026 - Aug 2026",
		description:
			"8-week AICTE virtual internship building and training machine learning models with Google AI-ML tooling.",
	},
	{
		company: "VirtualWorks Lab by Emogi",
		companyLogo: "https://www.google.com/s2/favicons?domain=emogi.in&sz=128",
		role: "Cyber Security Intern",
		duration: "Jun 2026 - Jul 2026",
		description:
			"Completed hands-on security assignments in network security, vulnerability assessment and secure configuration.",
	},
	{
		company: "InAmigos Foundation",
		companyLogo: "https://www.google.com/s2/favicons?domain=inamigosfoundation.org&sz=128",
		role: "Web Development Intern",
		duration: "May 2026 - Jun 2026",
		description:
			"Built and delivered responsive web pages for the foundation's web presence.",
	},
	{
		company: "Google CrowdSource VBIT",
		companyLogo: "/google-crowdsource.png",
		role: "Hospitality Coordinator",
		duration: "Jun 2025 - Jun 2026",
		description:
			"Coordinating hospitality operations for Crowdsource by Google India, managing events and ensuring smooth collaboration between teams and participants.",
	},
	{
		company: "1M1B (1 Million for 1 Billion)",
		companyLogo: "https://www.google.com/s2/favicons?domain=1m1b.org&sz=128",
		role: "AI for Sustainability Intern (IBM SkillsBuild)",
		duration: "Aug 2025 - Nov 2025",
		description:
			"Applied AI to real-world climate and sustainability problems in an AICTE program co-certified by IBM SkillsBuild.",
	},
	{
		company: "Chitrika VBIT",
		companyLogo: "https://www.google.com/s2/favicons?domain=vbithyd.ac.in&sz=128",
		role: "Photographer",
		duration: "Jul 2024 - Aug 2025",
		description:
			"Official photographer for Chitrika VBIT, capturing college events, cultural festivals, and creative moments. Developed expertise in event photography and visual storytelling.",
	},
	{
		company: "VISWAM.AI",
		companyLogo: "https://www.google.com/s2/favicons?domain=viswam.ai&sz=128",
		role: "AI Developer Intern",
		duration: "Jun 2025 - Jul 2025",
		description:
			"Worked as an AI Developer Intern at VISWAM.AI, gaining hands-on experience in artificial intelligence development and machine learning applications.",
	},
];

const skillGroups = [
	{
		category: "Programming Languages",
		icon: "code-slash-outline",
		skills: [
			{ name: "Python", level: 85 },
			{ name: "TypeScript / JavaScript", level: 80 },
			{ name: "Java", level: 80 },
			{ name: "C", level: 70 },
		],
	},
	{
		category: "AI & LLMs",
		icon: "sparkles-outline",
		skills: [
			{ name: "LLM Agents & RAG", level: 80 },
			{ name: "Machine Learning", level: 75 },
			{ name: "NLP / Generative AI", level: 75 },
			{ name: "Vector DBs (Qdrant, pgvector)", level: 70 },
		],
	},
	{
		category: "Full-Stack & Cloud",
		icon: "server-outline",
		skills: [
			{ name: "React / Next.js", level: 80 },
			{ name: "FastAPI / Node.js", level: 80 },
			{ name: "PostgreSQL / Supabase", level: 75 },
			{ name: "Docker / AWS", level: 70 },
		],
	},
	{
		category: "Data & Analytics",
		icon: "analytics-outline",
		skills: [
			{ name: "Microsoft PowerBI", level: 85 },
			{ name: "Data Analysis", level: 80 },
			{ name: "Statistics", level: 70 },
			{ name: "SQL", level: 75 },
		],
	},
	{
		category: "Tools & Technologies",
		icon: "hammer-outline",
		skills: [
			{ name: "Git & GitHub", level: 85 },
			{ name: "Linux", level: 75 },
			{ name: "Data Visualization", level: 80 },
			{ name: "Microsoft PowerPoint", level: 90 },
		],
	},
];

const certifications = [
	{
		title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
		issuer: "AWS Academy",
		category: "Cloud & OS",
		link: "/certificates/aws_cloud_foundations.pdf",
	},
	{
		title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
		issuer: "AWS Academy",
		category: "Cloud & OS",
		link: "/certificates/aws_cloud_architecting.pdf",
	},
	{
		title: "CISCO Linux Essentials",
		issuer: "Cisco Networking Academy",
		category: "Cloud & OS",
		link: "/certificates/cisco_linux_essentials.pdf",
	},
	{
		title: "CISCO Linux Certification",
		issuer: "Cisco Networking Academy",
		category: "Cloud & OS",
		link: "/certificates/cisco_linux.pdf",
	},
	{
		title: "Google Cohort-8 Android Developer",
		issuer: "Google / Android Developer",
		category: "Development & Other",
		link: "/certificates/cohort8_android_developer.pdf",
	},
	{
		title: "AWS Developing Generative AI Solutions",
		issuer: "Amazon Web Services",
		category: "Data & AI",
		link: "/certificates/aws_developing_genai_solutions.pdf",
	},
	{
		title: "Google AI Essentials",
		issuer: "Google / Coursera",
		category: "Data & AI",
		link: "/certificates/google_ai_essentials.pdf",
	},
	{
		title: "Agents & Workflows",
		issuer: "OpenAI Academy",
		category: "Data & AI",
		link: "/certificates/openai_agents_workflows.pdf",
	},
	{
		title: "HackerRank SQL (Advanced)",
		issuer: "HackerRank",
		category: "Data & AI",
		link: "/certificates/hackerrank_sql_advanced.pdf",
	},
	{
		title: "IBM Generative AI Developer",
		issuer: "IBM",
		category: "Data & AI",
		link: "/certificates/ibm_generative_ai.pdf",
	},
	{
		title: "HP LIFE Data Analytics",
		issuer: "HP LIFE",
		category: "Data & AI",
		link: "/certificates/hp_life_data_analytics.pdf",
	},
	{
		title: "Data Analyst Certification",
		issuer: "Oneroadmap",
		category: "Data & AI",
		link: "/certificates/oneroadmap_data_analyst.pdf",
	},
	{
		title: "Introduction to PowerBI",
		issuer: "SimpliLearn",
		category: "Data & AI",
		link: "/certificates/simplilearn_powerbi.pdf",
	},
	{
		title: "Python Programming For Beginners",
		issuer: "Udemy",
		category: "Development & Other",
		link: "/certificates/udemy_python_beginners.pdf",
	},
	{
		title: "C Programming Certification",
		issuer: "Edube",
		category: "Development & Other",
		link: "/certificates/c_programming_edube.pdf",
	},
	{
		title: "AI Workshop Certification",
		issuer: "Be10x",
		category: "Data & AI",
		link: "/certificates/be10x_ai_workshop.pdf",
	},
	{
		title: "ChatGPT and AI Workshop",
		issuer: "AI Workshop",
		category: "Data & AI",
		link: "/certificates/chatgpt_ai_workshop.pdf",
	},
	{
		title: "Unity Game Development (FPV) - LinkedIn Post",
		issuer: "LinkedIn",
		category: "Development & Other",
		link: "https://www.linkedin.com/posts/rohith-dachepally_unity-gamedevelopment-fpv-ugcPost-7433500447635648513-s34Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl9SysBbDFLSO6WL6SVptf-ju5KIu3uIk8",
	},
];

const revealUp = {
	initial: { opacity: 0, y: 26 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
	initial: { opacity: 0, y: 18 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.05,
			duration: 0.45,
		},
	},
	viewport: { once: true, amount: 0.15 },
};

export default function About() {
	const [selectedCategory, setSelectedCategory] = React.useState("All");
	const categories = ["All", "Cloud & OS", "Data & AI", "Development & Other"];

	const filteredCerts =
		selectedCategory === "All"
			? certifications
			: certifications.filter((cert) => cert.category === selectedCategory);

	return (
		<article className="about active" data-page="about">
			<header>
				<h2 className="h2 article-title cristik font-extralight">About Me</h2>
			</header>

			<motion.section className="about-intro-shell" {...revealUp}>
				<section className="about-text max-w-[600px]">
				<p>
					Hey, I&apos;m Rohith - a Tech Enthusiast and Computer Science undergrad at
					Vignana Bharathi Institute of Technology (VBIT), Hyderabad. Passionate
					about building AI systems that do real work: LLM agents, RAG
					pipelines and full-stack products with Python, TypeScript and Next.js.
				</p>
				<p>
					Recent builds include Incident Radar (agentic incident recovery),
					MemOS (long-term memory for local LLMs) and EscrowAI on Cardano.
					5 internships, 30+ public projects and Technical Co-Lead at IEI VBIT.
				</p>
				</section>
				<div className="about-intro-pulse" aria-hidden="true"></div>
			</motion.section>

			<motion.section className="service" {...revealUp}>
				<h3 className="h3 service-title spacegrotesk">What I Do</h3>
				<motion.ul className="service-list" {...staggerContainer}>
					<motion.li className="service-item" variants={revealUp}>
						<div className="service-icon-box">
							<ion-icon
								name="analytics-outline"
								style={{ fontSize: "28px", color: "var(--orange-yellow-crayola)" }}
							></ion-icon>
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">Data Analytics</h4>
							<p className="service-item-text">
								Transforming raw data into meaningful insights using PowerBI, SQL,
								and Python - from statistical analysis to interactive dashboards
								and data visualization.
							</p>
						</div>
					</motion.li>
					<motion.li className="service-item" variants={revealUp}>
						<div className="service-icon-box">
							<ion-icon
								name="sparkles-outline"
								style={{ fontSize: "28px", color: "var(--orange-yellow-crayola)" }}
							></ion-icon>
						</div>
						<div className="service-content-box">
							<h4 className="h4 service-item-title">AI & Full-Stack Engineering</h4>
							<p className="service-item-text">
								Building LLM agents, RAG and memory systems, and the Next.js /
								FastAPI products around them, deployed with Docker and AWS.
							</p>
						</div>
					</motion.li>
				</motion.ul>
			</motion.section>

			<motion.section className="timeline" {...revealUp}>
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="briefcase-outline"></ion-icon>
					</div>
					<h3 className="h3 font-semibold">Experience</h3>
				</div>

				<motion.ol className="timeline-list" {...staggerContainer}>
					{experience.map((role) => (
						<motion.li className="timeline-item" key={`${role.company}-${role.role}`} variants={revealUp}>
							<div className="flex cursor-pointer gap-4 transition-transform duration-200 hover:translate-x-2">
								<img
									className="h-[50px] w-[50px] flex-shrink-0 rounded-lg border border-gray-600 object-cover"
									src={role.companyLogo}
									alt={role.company}
								/>
								<div>
									<h4 className="h4 timeline-item-title">
										<b>{role.role}</b>
										<br />
										{role.company}
									</h4>
									<span>{role.duration}</span>
									<p className="timeline-text">{role.description}</p>
								</div>
							</div>
						</motion.li>
					))}
				</motion.ol>
			</motion.section>

			<div className="separator"></div>

			<motion.section className="skill" {...revealUp}>
				<div className="title-wrapper">
					<div className="icon-box mr-4">
						<ion-icon name="hammer-outline"></ion-icon>
					</div>
					<h3 className="h3 font-semibold">My Skills</h3>
				</div>

				<motion.div className="timeline-list" {...staggerContainer}>
					{skillGroups.map((skillGroup) => (
						<motion.div className="mr-8 mt-6 skill-card-shell" key={skillGroup.category} variants={revealUp}>
							<h4 className="skills-title cristik mb-0 overflow-hidden p-4 font-medium text-yellow-200">
								<span className="flex items-center gap-2 text-2xl">
									<ion-icon name={skillGroup.icon}></ion-icon>
									<span className="text-lg opacity-75">{skillGroup.category}</span>
								</span>
							</h4>
							<div className="flex flex-col gap-4 px-4">
								{skillGroup.skills.map((skill) => (
									<div key={skill.name}>
										<div className="mb-1 flex items-center justify-between">
											<span className="text-sm text-white opacity-80">{skill.name}</span>
										</div>
										<div className="h-1.5 overflow-hidden rounded-full bg-[#2a2a2b]">
											<div
												className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-1000"
												style={{ width: `${skill.level}%` }}
											/>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			<div className="separator"></div>

			<motion.section className="timeline" {...revealUp}>
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="ribbon-outline"></ion-icon>
					</div>
					<h3 className="h3 font-semibold">Certifications</h3>
				</div>

				<motion.div className="mb-6 flex flex-wrap gap-2" {...staggerContainer}>
					{categories.map((category) => (
						<motion.button
							key={category}
							onClick={() => setSelectedCategory(category)}
							variants={revealUp}
							className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
								selectedCategory === category
									? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-md shadow-yellow-500/25"
									: "bg-[#2a2a2b] text-gray-400 hover:text-white"
							}`}
						>
							{category}
						</motion.button>
					))}
				</motion.div>

				<motion.ul className="grid grid-cols-1 gap-4 md:grid-cols-2" {...staggerContainer}>
					{filteredCerts.map((cert) => (
						<motion.li
							className="cursor-pointer rounded-2xl border border-gray-800 bg-[#212123] p-5 transition-all duration-300 hover:translate-y-[-4px] hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/5"
							key={cert.title}
							onClick={() => window.open(cert.link, "_blank")}
							variants={revealUp}
						>
							<div className="flex items-start gap-4">
								<div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-xl border border-gray-800 bg-[#2a2a2b] text-xl text-yellow-400">
									<ion-icon name="ribbon-outline"></ion-icon>
								</div>
								<div className="flex-1">
									<h4 className="text-base font-semibold leading-tight text-white transition-colors hover:text-yellow-400">
										{cert.title}
									</h4>
									<span className="mt-1 block text-xs text-gray-400">{cert.issuer}</span>
									<span className="mt-3 inline-block rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
										{cert.category}
									</span>
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</motion.section>

			<div className="separator"></div>

			<motion.section className="timeline" {...revealUp}>
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="school-outline"></ion-icon>
					</div>
					<h3 className="h3 font-semibold">Education</h3>
				</div>

				<motion.ol className="timeline-list" {...staggerContainer}>
					<motion.li className="timeline-item" variants={revealUp}>
						<div className="flex cursor-pointer gap-4 transition-transform duration-200 hover:translate-x-2">
							<img
								className="h-[50px] w-[50px] flex-shrink-0 rounded-lg border border-gray-600 object-cover"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6hKR-GCU3gVGS-WSr9MD3aTLuhb7cWBXMQ&s"
								alt="VBIT"
							/>
							<div>
								<h4 className="h4 timeline-item-title font-semibold">
									Vignana Bharathi Institute of Technology (VBIT)
								</h4>
								<span>B.Tech, Computer Science and Engineering (Data Science) · CGPA 7.22</span>
								<p className="timeline-text">Aug 2023 - Jul 2027</p>
								<p className="timeline-text text-xs opacity-60">
									Skills: Python, Machine Learning, Data Science, SQL, Java, C
								</p>
							</div>
						</div>
					</motion.li>
					<motion.li className="timeline-item" variants={revealUp}>
						<div className="flex cursor-pointer gap-4 transition-transform duration-200 hover:translate-x-2">
							<img
								className="h-[50px] w-[50px] flex-shrink-0 rounded-lg border border-gray-600 object-cover"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VxNQv0DOYJ4NMwMAGwPC_Ht4YrZL5AuWSQ&s"
								alt="Sri Chaitanya"
							/>
							<div>
								<h4 className="h4 timeline-item-title font-semibold">
									Sri Chaitanya College of Education
								</h4>
								<span>Intermediate Education</span>
								<p className="timeline-text">Jul 2021 - Apr 2023</p>
							</div>
						</div>
					</motion.li>
				</motion.ol>
			</motion.section>

			<div className="separator"></div>

			<motion.section className="timeline" {...revealUp}>
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="trophy-outline"></ion-icon>
					</div>
					<h3 className="h3 font-semibold">Achievements</h3>
				</div>

				<motion.ol className="timeline-list" {...staggerContainer}>
					<motion.li className="timeline-item" variants={revealUp}>
						<a
							href="https://www.linkedin.com/posts/rohith-dachepally_proud-to-share-our-award-winning-project-ugcPost-7266166692341252096-bLFU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl9SysBbDFLSO6WL6SVptf-ju5KIu3uIk8"
							target="_blank"
							rel="noopener noreferrer"
							className="flex cursor-pointer gap-4 transition-transform duration-200 hover:translate-x-2"
						>
							<div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-lg border border-gray-600 bg-[#2a2a2b] text-2xl text-yellow-400">
								<ion-icon name="trophy"></ion-icon>
							</div>
							<div>
								<h4 className="h4 timeline-item-title font-semibold">
									<span className="text-yellow-400">1st Place</span> - Sowparnika-2K24
								</h4>
								<span>IETE-ISF VBIT | February 2024</span>
								<p className="timeline-text">
									Won first place in the Prototype category at Sowparnika-2K24,
									organized by IETE-ISF at Vignana Bharathi Institute of
									Technology (VBIT). Built an IR based Smart Home Design using
									Arduino and IR sensors, demonstrating real-time sensor control
									and intelligent automation.
								</p>
							</div>
						</a>
					</motion.li>
					<motion.li className="timeline-item" variants={revealUp}>
						<a
							href="https://www.linkedin.com/posts/rohith-dachepally_unity-gamedevelopment-fpv-ugcPost-7433500447635648513-s34Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl9SysBbDFLSO6WL6SVptf-ju5KIu3uIk8"
							target="_blank"
							rel="noopener noreferrer"
							className="flex cursor-pointer gap-4 transition-transform duration-200 hover:translate-x-2"
						>
							<div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-lg border border-gray-600 bg-[#2a2a2b] text-2xl text-yellow-400">
								<ion-icon name="trophy"></ion-icon>
							</div>
							<div>
								<h4 className="h4 timeline-item-title font-semibold">
									<span className="text-yellow-400">1st Place</span> - Frame 2 Reality
								</h4>
								<span>VBIT | February 2026</span>
								<p className="timeline-text">
									Secured First Place in Frame 2 Reality (VBIT). In a constrained
									timeframe our team built a complete First-Person Perspective
									(FPV) coin-collection game in Unity - a polished, playable demo
									ready for presentation. The prototype included smooth FPV
									controls, dynamic coin spawning and collection, a real-time
									scoring system, environment tuning, and performance
									optimizations.
								</p>
							</div>
						</a>
					</motion.li>
				</motion.ol>
			</motion.section>
		</article>
	);
}
