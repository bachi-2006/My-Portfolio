import React from "react";

const socials = [
  { icon: "logo-github", href: "https://github.com/bachi-2006", label: "GitHub" },
  { icon: "logo-linkedin", href: "https://www.linkedin.com/in/rohith-dachepally", label: "LinkedIn" },
  { icon: "logo-instagram", href: "https://www.instagram.com/_mr_decent_06", label: "Instagram" },
  { icon: "link-outline", href: "https://linktr.ee/rohith_dachepally", label: "Linktree" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left: branding */}
        <div className="footer-brand">
          <span className="footer-name cristik">Rohith Dachepally</span>
          <span className="footer-tagline">CS Undergrad · Data Analytics · IoT</span>
        </div>

        {/* Center: quick links */}
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/" className="footer-link">Home</a>
          <span className="footer-sep">·</span>
          <a href="/about" className="footer-link">About</a>
          <span className="footer-sep">·</span>
          <a href="/portfolio" className="footer-link">Portfolio</a>
          <span className="footer-sep">·</span>
          <a href="/contact" className="footer-link">Contact</a>
          <span className="footer-sep">·</span>
          <a href="/experiments" className="footer-link">Experiments</a>
        </nav>

        {/* Right: socials */}
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
        <span>© {year} Rohith Dachepally. All rights reserved.</span>
        <span className="footer-made">Made with ♥ in Hyderabad</span>
      </div>
    </footer>
  );
}
