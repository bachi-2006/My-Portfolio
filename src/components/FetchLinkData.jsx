import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const FetchLinkData = ({ url = "https://www.whatsapp.com/", alt = "Title" }) => {
	const [faviconUrl, setFaviconUrl] = useState("");
	const [title, setTitle] = useState("");
	const [error, setError] = useState("");

	const hostname = useMemo(() => {
		try {
			const base = typeof window !== "undefined" ? window.location.origin : "https://example.com";
			return new URL(url, base).hostname.replace("www.", "");
		} catch {
			return "";
		}
	}, [url]);

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const handleFetchData = async () => {
			if (!url) {
				if (!isMounted) return;
				setError("Please provide a valid URL");
				return;
			}

			if (url.startsWith("/")) {
				if (!isMounted) return;
				setTitle(alt || "Portfolio Link");
				setFaviconUrl("/logo.svg");
				setError("");
				return;
			}

			if (!isMounted) return;
			setError("");
			setTitle("");
			setFaviconUrl("");

			try {
				const proxyUrl = "https://api.allorigins.win/get?url=";
				const response = await axios.get(`${proxyUrl}${encodeURIComponent(url)}`, {
					signal: controller.signal,
					timeout: 6000,
				});
				const html = response.data.contents;
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, "text/html");

				if (!isMounted) return;

				const pageTitle = doc.querySelector("title")?.textContent?.trim() || alt;
				setTitle(pageTitle);

				const linkElement = doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
				const link = linkElement ? linkElement.getAttribute("href") : null;
				const favicon = link
					? new URL(link, url).href
					: new URL("/favicon.ico", url).href;
				setFaviconUrl(favicon);
			} catch (fetchError) {
				if (!isMounted || axios.isCancel(fetchError)) return;

				setTitle(alt || hostname || "Project Link");
				setFaviconUrl("");
				setError("Preview unavailable");
			}
		};

		handleFetchData();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [alt, hostname, url]);

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="fetchDataLink group cursor-pointer rounded-2xl bg-[#2b2b2c] p-1 transition-[transform,background-color] duration-200 hover:scale-[1.05] hover:bg-[#3a3a3b]"
		>
			<div className="cursor-pointer transition-transform">
				<div className="flex items-center gap-3 rounded-xl p-2">
					<div className="mx-2 flex w-6 items-center justify-center text-sm text-white/80">
						{faviconUrl ? (
							<img src={faviconUrl} className="w-6" alt={`${title || alt} favicon`} />
						) : (
							<span aria-hidden="true">-&gt;</span>
						)}
					</div>
					<div className="flex w-full items-center justify-between gap-4">
						<div className="min-w-0">
							<h2 className="text-sm font-medium text-white">{title || alt}</h2>
							<h3 className="truncate text-sm font-thin text-[#d6d6dc]">
								{error || hostname || url}
							</h3>
						</div>
						<div className="flex items-center gap-2 rounded-full bg-[#ffffff25] px-3 py-2 text-white group-hover:bg-[#c0c0c025]">
							<ion-icon name="arrow-forward-outline"></ion-icon>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default FetchLinkData;
