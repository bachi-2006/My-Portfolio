export const site = {
	name: "Rohith Dachepally",
	role: "CS Undergrad @ VBIT | Data Analytics & IoT Enthusiast",
	college: "Vignana Bharathi Institute of Technology (VBIT)",
	collegeShort: "VBIT",
	location: "Hyderabad, Telangana, India",
	email: "dachepallyrohith@gmail.com",
	githubUser: "bachi-2006",
	github: "https://github.com/bachi-2006",
	linkedin: "https://www.linkedin.com/in/rohith-dachepally",
	instagram: "https://www.instagram.com/_mr_decent_06",
	linktree: "https://linktr.ee/rohith_dachepally",
	resume: "/resume.png",
	tagline: "I Analyze, Code & Innovate",
};

export async function sendContactMessage({ name, email, message }) {
	const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			name,
			email,
			message,
			_subject: `Portfolio message from ${name}`,
			_replyto: email,
			_template: "table",
		}),
	});

	if (!response.ok) {
		throw new Error("Form endpoint rejected the request");
	}

	return response.json();
}
