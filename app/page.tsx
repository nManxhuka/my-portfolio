"use client";

import { FormEvent, useState } from "react";

const projects = [
  { number: "01", title: "Silent AI", type: "Enterprise AI platform", description: "Knowledge management, AI chat, connectors, and data orchestration." },
  { number: "02", title: "Allam", type: "Android app", description: "A mobile application designed to enhance productivity and user engagement." },
  { number: "03", title: "KODE OS", type: "Enterprise platform", description: "Facility management with smart dashboards and a mobile app." },
  { number: "04", title: "JamOrder", type: "Restaurant platform", description: "Restaurant ordering and POS with a seamless user experience." },
  { number: "05", title: "Locum Tenens Platform", type: "Healthcare platform", description: "Healthcare staffing connecting nurses and medics with job opportunities." },
];

const skills = ["Product design", "UX design", "UI design", "User research", "Information architecture", "Design systems", "AI product design", "Prompt engineering"];

const experience = [
  { role: "Senior Product Designer", company: "FAST LTA", dates: "Dec 2025 — Present · Remote", notes: "Leading product design for AI-powered enterprise applications, including AI Chat, Connectors, Datasets, Scheduler, and Admin Settings. Built and maintained a scalable design system using Material 3; partners with product, engineering, and data teams; conducts research and usability testing." },
  { role: "Senior Product Designer", company: "Proxify", dates: "Aug 2025 — Present · Remote", notes: "Designing enterprise SaaS products for international clients; leading end-to-end UX from discovery and wireframes to high-fidelity UI. Creating atomic design-based component libraries and improving user flows with data-driven insights." },
  { role: "Lead Product Designer", company: "Nacew", dates: "Mar 2023 — Aug 2025 · Pristina, Kosovo", notes: "Led end-to-end product and UX design for enterprise and mobile solutions, including an Android user availability app. Developed and scaled the design system across mobile and web." },
  { role: "Senior Product Designer", company: "KODE Labs", dates: "Aug 2021 — Mar 2023 · Pristina", notes: "Led UX across products, achieving a 100% boost in user satisfaction. Designed and launched KODE Labs mobile app for facility management, personalized dashboards, and scalable design systems." },
  { role: "Senior Product Designer", company: "Intes GmbH", dates: "Jun 2018 — Aug 2021 · Remote", notes: "Designed responsive, user-friendly websites with Webflow and Wix; designed JamOrder mobile app for food ordering and restaurant management; improved user satisfaction by 25% through iterative, data-driven design." },
  { role: "UX/UI Designer", company: "Oda Lab LLC", dates: "Feb 2015 — Jun 2018 · Pristina, Kosovo", notes: "Designed and launched OnScreen mobile app; worked on MAPSS health-screening software; created high-fidelity prototypes and UI mockups to validate concepts." },
  { role: "Web Designer", company: "Profmedia GmbH", dates: "Jun 2012 — Feb 2015 · Switzerland", notes: "Designed marketing platforms, improved overall user experience, and created wireframes and UI assets for new websites and digital products." },
];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:nderimmanxhuka@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Back to top">NM<span>•</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}><span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span></button>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <p className="eyebrow reveal">Senior Product Designer · AI Product Designer</p>
        <h1 id="hero-title" className="reveal delay-1">Nderim Manxhuka<br /><em>designs clarity</em>.</h1>
        <div className="hero-bottom reveal delay-2">
          <p>Senior product designer with 10+ years of experience shaping enterprise SaaS, AI-powered platforms, and mobile applications.</p>
          <a href="#work" className="text-link">View selected work <Arrow /></a>
        </div>
        <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
      </section>

      <div id="content">
        <section id="about" className="section about" aria-labelledby="about-title">
          <p className="section-number">01 / About</p>
          <div><h2 id="about-title">Complex products,<br />made <em>intuitive.</em></h2><p className="body-copy">I specialise in end-to-end product design, user research, interaction design, and scalable design systems. I create intuitive AI experiences that solve complex problems and deliver measurable business impact—working closely with cross-functional teams to ship high-quality products used worldwide.</p></div>
        </section>

        <section className="section skills" aria-labelledby="skills-title">
          <p className="section-number">02 / Capabilities</p>
          <div><h2 id="skills-title">What I bring<br />to the table.</h2><ul className="skill-list">{skills.map((skill, i) => <li key={i}><span>{String(i + 1).padStart(2, "0")}</span>{skill}</li>)}</ul></div>
        </section>

        <section id="work" className="section work" aria-labelledby="work-title">
          <div className="section-heading"><p className="section-number">03 / Selected work</p><h2 id="work-title">Things made<br />with <em>intention.</em></h2></div>
          <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="card-top"><span>{project.number}</span><span>{project.type}</span></div><div className="card-main"><h3>{project.title}</h3><p>{project.description}</p></div><span className="card-link muted-link">Project link not provided</span></article>)}</div>
        </section>

        <section className="section background" aria-labelledby="background-title">
          <p className="section-number">04 / Experience</p>
          <div><h2 id="background-title">A decade of<br /><em>product craft.</em></h2><div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.dates}`}><div><h3>{item.role}</h3><p className="experience-meta">{item.company} · {item.dates}</p></div><p>{item.notes}</p></article>)}</div><div className="education"><p className="section-number">Education & certifications</p><p><strong>FIEK, University of Pristina</strong> · Engineering</p><p><strong>Felbach Haus</strong> · Website Design</p><p><strong>AUK</strong> · Adobe Photoshop Certification</p><p><strong>Infinit Center</strong> · HTML5 & CSS3 Development</p><p><strong>Coursera Instructor Network</strong> · GenAI for UX Designers, Sep 2025</p><p><strong>Vanderbilt University</strong> · Prompt Engineering for ChatGPT, Sep 2025</p></div></div>
        </section>
      </div>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <p className="eyebrow">05 / Contact</p><h2 id="contact-title">Start a<br /><em>conversation.</em></h2>
        <div className="contact-grid"><div><p>For product-design collaborations, AI-powered experiences, and design-system work.</p><a className="email-link" href="mailto:nderimmanxhuka@gmail.com">nderimmanxhuka@gmail.com <Arrow /></a><p className="contact-note">Pristina, Kosovo · +383 49 307 165</p><a className="social-link" href="https://www.linkedin.com/in/nderim-manxhuka-115a6863" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a className="social-link" href="https://www.behance.net/nManxhuka" target="_blank" rel="noreferrer">Behance <Arrow /></a></div><form onSubmit={handleSubmit}><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required /><label htmlFor="message">How can I help?</label><textarea id="message" name="message" rows={4} required /><button type="submit">Send enquiry <Arrow /></button></form></div>
      </section>
      <footer><span>© {new Date().getFullYear()} Nderim Manxhuka</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
