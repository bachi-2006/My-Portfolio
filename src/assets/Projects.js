export const Projects = [
	{
		title: "Incident Radar: Agentic Incident Recovery",
		categories: ["AI & Machine Learning", "Full-Stack"],
		img: ["/projects/incident-radar.png"],
		description:
			"Workato Hackathon build that turns noisy telemetry into structured incidents, runs LLM root-cause triage, and routes fixes through a policy engine (ACT / ASK / NOTIFY) and an allow-listed, idempotent action gateway. Resolution needs 3 healthy samples and emits a SHA-256 recovery receipt to Slack.",
		tools: ["Next.js 15", "Supabase", "Workato", "Claude", "Slack API"],
		links: ["https://github.com/bachi-2006/Incident-Radar", "https://incident-radar.onrender.com"],
	},
	{
		title: "MemOS: Long-Term Memory for Local LLMs",
		categories: ["AI & Machine Learning"],
		img: ["/projects/memos-ui.png"],
		description:
			"Local-first memory layer for Ollama models: 768-dim semantic search in Qdrant, knowledge-graph extraction into Neo4j, importance decay, adaptive compression and conflict resolution, with a Redis embedding cache and automatic SQLite fallback.",
		tools: ["Python", "FastAPI", "PostgreSQL", "Qdrant", "Neo4j", "Redis", "Docker"],
		links: ["https://github.com/bachi-2006/MemOS"],
	},
	{
		title: "EscrowAI: Freelance Escrow on Cardano",
		categories: ["Web3", "Full-Stack"],
		img: ["/projects/escrowai-ui.png"],
		description:
			"IndiaCodex 2026 project: a full-stack escrow platform with wallet-based identity and a Plutus V3 validator that enforces payout routing, deadlines and signatures on-chain, with an optional AI oracle for release.",
		tools: ["Next.js 16", "Express.js", "PostgreSQL", "Prisma", "Aiken"],
		links: ["https://github.com/bachi-2006"],
	},
	{
		title: "RoadSense AI: Accident Witness Assistant",
		categories: ["AI & Machine Learning", "Full-Stack"],
		img: ["/projects/roadsense-ui.png"],
		description:
			"PromptWars hackathon build: an AI witness assistant that turns photos from a crash scene into a structured incident report for emergency services, with plate recognition, a responder dashboard and encrypted reports.",
		tools: ["React", "Vite", "Firebase", "Cloud Functions", "Docker"],
		links: ["https://github.com/bachi-2006/RoadAccidentWitness"],
	},
	{
		title: "ServiceNow CAD Exam Simulator",
		categories: ["Full-Stack"],
		img: ["/projects/cad-ui.png"],
		description:
			"Practice platform for the ServiceNow Certified Application Developer exam: 246 questions, timed 60-question mock exams weighted by domain, domain practice and flashcards.",
		tools: ["JavaScript", "HTML", "CSS"],
		links: ["https://github.com/bachi-2006"],
	},
	{
		title: "RailWay AI Control: Smart India Hackathon",
		categories: ["AI & Machine Learning", "Full-Stack"],
		img: ["/projects/sih_train_flow.png"],
		description:
			"Smart India Hackathon train-traffic optimizer: live track status, conflict detection and an AI simulator that recommends schedule changes, tracking throughput, delay and punctuality.",
		tools: ["TypeScript", "React", "Optimization"],
		links: ["https://github.com/bachi-2006/Train-Flow-Optimization-SIH"],
	},
	{
		title: "GController: Phone-to-PC Controller",
		categories: ["Python Tools", "Full-Stack"],
		img: ["/projects/gcontroller_gamepad.png", "/projects/gcontroller.png"],
		description:
			"Zero-install WiFi controller that maps phone touch, buttons and accelerometer to mouse, keyboard and gamepad events on Windows over WebSockets.",
		tools: ["Node.js", "WebSockets", "PowerShell"],
		links: ["https://github.com/bachi-2006/GController"],
	},
	{
		title: "TraceTox: Field Drug-Test Verification",
		categories: ["AI & Machine Learning"],
		img: ["/projects/tracetox-ui.png"],
		description:
			"Phone-camera prototype that calibrates colorimetric drug-test kits against a reference colour card, classifies the result, and locks image hash, GPS and timestamp into a cryptographically signed record.",
		tools: ["Python", "Computer Vision", "Cryptography"],
		links: ["https://github.com/bachi-2006/TraceTox"],
	},
	{
		title: "Drug Interaction Detection System",
		categories: ["AI & Machine Learning"],
		img: ["/projects/drug-ui.png"],
		description:
			"NLP system that detects drug interactions, checks dosage and suggests safer alternatives by patient age, combining several medical datasets with IBM Granite.",
		tools: ["Python", "NLP", "IBM Granite"],
		links: ["https://github.com/bachi-2006/Drug-Recognition-System"],
	},
	{
		title: "IR Smart Home Prototype",
		categories: ["IoT & Embedded Systems"],
		img: ["/projects/irhome-award.jpg", "/projects/irhome-board.jpg"],
		description:
			"Award-winning prototype from Sowparnika-2K24 (IETE-ISF, VBIT). An IR-based smart home design on Arduino that reads live sensor input and drives intelligent automation. It placed first in the Prototype category.",
		tools: ["Arduino", "IR Sensors", "C/C++", "Embedded Systems"],
		links: [
			"https://www.linkedin.com/posts/rohith-dachepally_proud-to-share-our-award-winning-project-ugcPost-7266166692341252096-bLFU",
		],
	},
	{
		title: "Frame 2 Reality: FPV Unity Game",
		categories: ["Game Development"],
		img: ["/projects/frame2reality-stage.jpg", "/projects/frame2reality-coding.jpg"],
		description:
			"First-place demo from Frame 2 Reality (VBIT). In a tight timeframe the team shipped a playable first-person coin-collection game in Unity: FPV controls, dynamic coin spawn, live scoring, environment tuning, and performance passes.",
		tools: ["Unity", "C#", "Game Design"],
		links: [
			"https://www.linkedin.com/posts/rohith-dachepally_unity-gamedevelopment-fpv-ugcPost-7433500447635648513-s34Y",
		],
	},
	{
		title: "Real-Time Quiz Room Platform",
		categories: ["Full-Stack"],
		img: [],
		description:
			"Live quiz rooms for up to 150 concurrent players, with Socket.IO on a custom Next.js server, session-token auth, presence tracking and automatic HTTP-polling fallback.",
		tools: ["Next.js", "Socket.IO", "PostgreSQL", "Redis"],
		links: ["https://github.com/bachi-2006"],
	},
	{
		title: "Gesture OS Automator",
		categories: ["AI & Machine Learning"],
		img: [],
		description:
			"Webcam-based computer-vision layer that maps MediaPipe hand landmarks to Windows shortcuts: cursor, clicks, volume, window control, and app launch, so the desktop can be driven without a keyboard.",
		tools: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"],
		links: ["https://github.com/bachi-2006/Hand-Gesture-Actions"],
	},
	{
		title: "RGB Keyboard Equalizer",
		categories: ["Python Tools"],
		img: [],
		description:
			"Real-time WASAPI loopback visualizer that FFT-splits system audio and paints MSI keyboard zones (bass through treble) over a reverse-engineered Mystic Light HID protocol.",
		tools: ["Python", "NumPy", "WASAPI", "HID"],
		links: ["https://github.com/bachi-2006/RGB-Equalizer"],
	},
];
